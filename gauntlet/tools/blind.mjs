// Build a blind A/B kit for one piece.
//   node blind.mjs <kitDir> <ourRoute> <barPrefix>
//   e.g. node blind.mjs ../rounds/p1-judge-r1 / home
// Captures OUR route as viewport slices (same format as the bar's slices), then copies both sets into
// <kitDir>/A and <kitDir>/B in a random order. The key is written OUTSIDE the repo (GAUNTLET_KEYS or the
// lead's scratchpad) so a judge with repo access cannot read it.
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const [, , kitArg, route, barPrefix] = process.argv;
if (!kitArg || !route || !barPrefix) { console.log("usage: node blind.mjs <kitDir> <ourRoute> <barPrefix>"); process.exit(2); }
const kit = path.resolve(kitArg);
const barDir = path.resolve(here, "../bar");
const VIEWPORTS = [["desktop", 1440, 900], ["mobile", 390, 844]];
const MAX_SLICES = 9;

const ours = path.join(kit, "_ours");
fs.rmSync(kit, { recursive: true, force: true });
fs.mkdirSync(ours, { recursive: true });

const browser = await chromium.launch();
for (const [vp, width, height] of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto("http://localhost:5199" + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  let y = 0;
  for (let i = 0; i < MAX_SLICES; i++) {
    // Scrolling lives on #root.
    await page.evaluate((yy) => { document.getElementById("root").scrollTo({ top: yy, behavior: "instant" }); }, y);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(ours, `${vp}-slice${i}.png`) });
    const max = await page.evaluate(() => { const r = document.getElementById("root"); return r.scrollHeight - r.clientHeight; });
    if (y >= max) break;
    y = Math.min(y + height - 80, max);
  }
  await page.close();
}
await browser.close();

// GAUNTLET_OURS=A|B forces the side (used to flip the order between rounds as a position-bias control).
const oursIsA = process.env.GAUNTLET_OURS ? process.env.GAUNTLET_OURS === "A" : Math.random() < 0.5;
const dirs = { ours: path.join(kit, oursIsA ? "A" : "B"), bar: path.join(kit, oursIsA ? "B" : "A") };
fs.mkdirSync(dirs.ours); fs.mkdirSync(dirs.bar);
for (const f of fs.readdirSync(ours)) fs.renameSync(path.join(ours, f), path.join(dirs.ours, f));
fs.rmdirSync(ours);
for (const f of fs.readdirSync(barDir)) {
  const m = f.match(new RegExp(`^${barPrefix}-(desktop|mobile)-(slice\\d+\\.png)$`));
  if (m) fs.copyFileSync(path.join(barDir, f), path.join(dirs.bar, `${m[1]}-${m[2]}`));
}
const keyDir = process.env.GAUNTLET_KEYS || "/private/tmp/claude-501/-Users-marklorenceberon-Documents-Otherfiles-Green-Pasture-Life-Church/d5ea0f91-ff47-4e44-857b-7dcfc880e0d4/scratchpad/keys";
fs.mkdirSync(keyDir, { recursive: true });
fs.writeFileSync(path.join(keyDir, path.basename(kit) + ".key.json"), JSON.stringify({ route, barPrefix, ours: oursIsA ? "A" : "B" }));
console.log(`kit ready: ${kit}  (A: ${fs.readdirSync(path.join(kit, "A")).length} files, B: ${fs.readdirSync(path.join(kit, "B")).length} files)`);
