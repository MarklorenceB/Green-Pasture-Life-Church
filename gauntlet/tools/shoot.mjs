// Screenshot harness.
//   node shoot.mjs <outDir> [baseUrl] [routeName,routeName...]
// Writes <name>-<viewport>-full.png (whole page) and <name>-<viewport>-fold.png (first screen).
import { chromium } from "playwright";
import fs from "node:fs";

const TARGETS = {
  home: "/",
  about: "/about",
  ministries: "/ministries",
  "ministry-detail": "/ministries/youth-ministry",
  leaders: "/leaders",
  events: "/events",
  "event-detail": "/events/sunday-worship-service",
  give: "/give",
  contact: "/contact",
};
const VIEWPORTS = [["desktop", 1440, 900], ["mobile", 390, 844]];

const [, , outDir, base = "http://localhost:5199", only] = process.argv;
if (!outDir) { console.log("usage: node shoot.mjs <outDir> [baseUrl] [names]"); process.exit(2); }
fs.mkdirSync(outDir, { recursive: true });
const names = only ? only.split(",") : Object.keys(TARGETS);

const browser = await chromium.launch();
for (const [vp, width, height] of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  for (const name of names) {
    await page.goto(base + TARGETS[name], { waitUntil: "networkidle" });
    await page.waitForTimeout(1500); // let entrance animations settle before the fold shot
    await page.screenshot({ path: `${outDir}/${name}-${vp}-fold.png` });
    // Scrolling lives on #root (body is position:fixed); unlock it so fullPage works.
    await page.addStyleTag({
      content:
        "html,body{position:static!important;height:auto!important;overflow:visible!important}#root{height:auto!important;overflow:visible!important}",
    });
    // Walk the page so scroll-triggered reveals fire, then return to the top.
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += 400) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${outDir}/${name}-${vp}-full.png`, fullPage: true });
    console.log(`${name}-${vp} ${total}px`);
  }
  await page.close();
}
await browser.close();
