// Tiny localhost service so sandboxed builders (which cannot launch a browser) can still
// take screenshots and run the content gate.
//   GET /shoot?out=<folder under gauntlet/rounds>&names=home,about   → runs shoot.mjs
//   GET /content?out=<folder under gauntlet/rounds>                  → snapshot + diff vs baseline
//   GET /measure?routes=/,/about                                     → font-swap CLS + h1 heights (measure.mjs)
import http from "node:http";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const rounds = path.resolve(here, "../rounds");
const baseline = path.resolve(here, "../baseline/content.json");
const SITE = "http://localhost:5199";

const run = (args) =>
  new Promise((resolve) => {
    const child = spawn("node", args, { cwd: here });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("close", (code) => resolve({ code, out }));
  });

// One job at a time keeps Chromium runs from starving each other.
let queue = Promise.resolve();

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    const out = (url.searchParams.get("out") || "").replace(/[^A-Za-z0-9_-]/g, "");
    const names = (url.searchParams.get("names") || "").replace(/[^A-Za-z0-9_,-]/g, "");
    if (url.pathname === "/measure") {
      const routes = (url.searchParams.get("routes") || "").replace(/[^A-Za-z0-9_,\/-]/g, "");
      queue = queue.then(async () => {
        const result = await run(["measure.mjs", ...(routes ? [routes] : [])]);
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`exit ${result.code}\n${result.out}`);
      });
      return;
    }
    if (!out || !["/shoot", "/content"].includes(url.pathname)) {
      res.writeHead(400).end("usage: /shoot?out=<folder>&names=a,b  |  /content?out=<folder>\n");
      return;
    }
    const dir = path.join(rounds, out);
    queue = queue.then(async () => {
      let result;
      if (url.pathname === "/shoot") {
        result = await run(["shoot.mjs", dir, SITE, ...(names ? [names] : [])]);
      } else {
        const file = path.join(dir, "content.json");
        await run(["-e", `require("fs").mkdirSync(${JSON.stringify(dir)},{recursive:true})`]);
        const snap = await run(["content.mjs", "snapshot", file, SITE]);
        result = snap.code ? snap : await run(["content.mjs", "diff", baseline, file]);
      }
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`exit ${result.code}\nfiles in gauntlet/rounds/${out}/\n${result.out}`);
    });
  })
  .listen(5198, "127.0.0.1", () => console.log("gauntlet tools on http://127.0.0.1:5198"));
