// Auditoría automática WCAG 2.2 AA + buenas prácticas con axe-core. La automatización solo cubre una parte de los criterios.
import fs from "node:fs";
import { createRequire } from "node:module";
import { launch, BASE, PAGES, sleep, scrollAll } from "./lib.mjs";
const axeSrc = fs.readFileSync(createRequire(import.meta.url).resolve("axe-core/axe.min.js"), "utf8");
const widths = (process.env.WIDTHS || "375,1280").split(",").map(Number);
const b = await launch(); const page = await b.newPage(); const seen = new Map();
for (const w of widths) {
  await page.setViewport({ width: w, height: 900 });
  for (const p of PAGES) {
    await page.goto(BASE + p, { waitUntil: "load" }); await sleep(700); await scrollAll(page);
    await page.evaluate(axeSrc);
    const res = await page.evaluate(() => axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] } }));
    for (const v of res.violations) { const e = seen.get(v.id) || { impact: v.impact, help: v.help, where: new Set(), sample: [] }; e.where.add(`${p}@${w}`); for (const n of v.nodes.slice(0, 2)) if (e.sample.length < 3) e.sample.push(n.target.join(" ")); seen.set(v.id, e); }
  }
}
await b.close();
console.log(`a11y: ${PAGES.length * widths.length} combinaciones auditadas con axe-core`);
if (!seen.size) console.log("a11y: 0 violaciones");
for (const [id, e] of seen) console.log(`[${e.impact}] ${id} — ${e.help}\n  en: ${[...e.where].slice(0, 6).join(", ")}\n  ej: ${e.sample.join(" | ")}`);
process.exitCode = seen.size ? 1 : 0;
