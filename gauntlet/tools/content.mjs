// Content-preservation instrument.
//   node content.mjs snapshot <out.json> [baseUrl]
//   node content.mjs diff <baseline.json> <current.json>
// Layout may move text around; the words, images and links themselves must not change.
import { chromium } from "playwright";
import fs from "node:fs";

const ROUTES = [
  "/", "/about", "/ministries", "/leaders", "/events", "/give", "/contact",
  "/ministries/mens-ministry", "/ministries/womens-ministry", "/ministries/youth-ministry",
  "/ministries/worship-team", "/ministries/outreach-ministry", "/ministries/connect-ministry",
  "/ministries/kids-ministry", "/ministries/servants-on-service",
  "/events/sunday-worship-service", "/events/prayer-gathering",
  "/events/care-group-gathering", "/events/youth-gathering",
];

const [, , cmd, a, b] = process.argv;

if (cmd === "snapshot") {
  const base = b || "http://localhost:5199";
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const result = {};
  for (const route of ROUTES) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    result[route] = await page.evaluate(() => {
      const root = document.getElementById("root");
      // Separate block elements with spaces so adjacent words never fuse.
      const parts = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) parts.push(walker.currentNode.nodeValue);
      const words = parts
        .join(" ")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}@.:#₱-]+/gu, " ")
        .split(/\s+/)
        .map((w) => w.replace(/^[.:-]+|[.:-]+$/g, ""))
        .filter(Boolean)
        .sort();
      const clean = (s) => s.split("/").pop().split("?")[0].replace(/-[A-Za-z0-9_-]{8}(?=\.\w+$)/, "");
      const imgs = [...document.querySelectorAll("img")].map((i) => clean(i.getAttribute("src") || ""));
      const bg = [...document.querySelectorAll("*")]
        .map((e) => getComputedStyle(e).backgroundImage)
        .filter((v) => v && v.includes("url("))
        .flatMap((v) => [...v.matchAll(/url\("?([^")]+)/g)].map((m) => clean(m[1])))
        .filter((v) => !v.startsWith("data:"));
      const links = [...document.querySelectorAll("a[href]")].map((l) => l.getAttribute("href"));
      return {
        words,
        imgs: [...new Set([...imgs, ...bg])].sort(),
        links: [...new Set(links)].sort(),
      };
    });
  }
  await browser.close();
  fs.writeFileSync(a, JSON.stringify(result, null, 1));
  console.log(`wrote ${a}: ${ROUTES.length} routes`);
} else if (cmd === "diff") {
  const base = JSON.parse(fs.readFileSync(a, "utf8"));
  const cur = JSON.parse(fs.readFileSync(b, "utf8"));
  const bag = (arr) => arr.reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map());
  let failures = 0;
  for (const route of ROUTES) {
    const out = [];
    if (!cur[route]) { console.log(`FAIL ${route}: route missing`); failures++; continue; }
    const bw = bag(base[route].words), cw = bag(cur[route].words);
    const removed = [], added = [];
    for (const [w, n] of bw) if ((cw.get(w) || 0) < n) removed.push(`${w}×${n - (cw.get(w) || 0)}`);
    for (const [w, n] of cw) if ((bw.get(w) || 0) < n) added.push(`${w}×${n - (bw.get(w) || 0)}`);
    if (removed.length) out.push(`  words removed: ${removed.join(", ")}`);
    if (added.length) out.push(`  words added:   ${added.join(", ")}`);
    for (const key of ["imgs", "links"]) {
      const gone = base[route][key].filter((v) => !cur[route][key].includes(v));
      const fresh = cur[route][key].filter((v) => !base[route][key].includes(v));
      if (gone.length) out.push(`  ${key} removed: ${gone.join(", ")}`);
      if (fresh.length) out.push(`  ${key} added:   ${fresh.join(", ")}`);
    }
    if (out.length) { failures++; console.log(`FAIL ${route}\n${out.join("\n")}`); }
    else console.log(`ok   ${route}`);
  }
  console.log(failures ? `\n${failures} route(s) changed` : "\nAll routes preserved");
  process.exit(failures ? 1 : 0);
} else {
  console.log("usage: node content.mjs snapshot <out.json> [baseUrl] | diff <baseline.json> <current.json>");
  process.exit(2);
}
