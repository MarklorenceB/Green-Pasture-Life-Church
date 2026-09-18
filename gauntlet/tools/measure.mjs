// Font-swap layout-shift instrument.
//   node measure.mjs [route,route...]
// For each route at 1440 and 390: CLS with webfonts delayed 1.2s, and the h1 height with webfonts
// blocked entirely vs loaded (a matched fallback keeps those two within a line).
import { chromium } from "playwright";
const routes = (process.argv[2] || "/,/about,/ministries,/leaders,/events,/give,/contact").split(",");
const BASE = "http://localhost:5199";
const b = await chromium.launch();
for (const [vp, width, height] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
  for (const route of routes) {
    let p = await b.newPage({ viewport: { width, height } });
    await p.route(/fonts\.gstatic\.com/, async (r) => { await new Promise((x) => setTimeout(x, 1200)); r.continue(); });
    await p.addInitScript(() => {
      window.__cls = 0; window.__src = [];
      new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) { window.__cls += e.value; if (e.value > 0.01) window.__src.push(e.value.toFixed(3) + " " + (e.sources || []).map((s) => s.node && (s.node.tagName + "." + String(s.node.className).slice(0, 40))).join(" | ")); } }).observe({ type: "layout-shift", buffered: true });
    });
    await p.goto(BASE + route, { waitUntil: "networkidle" });
    await p.waitForTimeout(2500);
    const cls = await p.evaluate(() => ({ cls: window.__cls, src: window.__src }));
    const loaded = await p.evaluate(() => { const h = document.querySelector("h1"); return h ? Math.round(h.getBoundingClientRect().height) : null; });
    await p.close();
    p = await b.newPage({ viewport: { width, height } });
    await p.route(/fonts\.gstatic\.com/, (r) => r.abort());
    await p.goto(BASE + route, { waitUntil: "networkidle" });
    await p.waitForTimeout(800);
    const blocked = await p.evaluate(() => { const h = document.querySelector("h1"); return h ? Math.round(h.getBoundingClientRect().height) : null; });
    await p.close();
    console.log(`${vp} ${route}  CLS=${cls.cls.toFixed(4)}  h1 fallback=${blocked}px loaded=${loaded}px${cls.src.length ? "\n    shifts: " + cls.src.join("\n            ") : ""}`);
  }
}
await b.close();
