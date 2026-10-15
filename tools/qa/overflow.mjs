// Detecta desbordes horizontales y errores de consola en cada página × ancho.
import { launch, BASE, PAGES, sleep } from "./lib.mjs";
const widths = (process.env.WIDTHS || "320,375,768,1024,1440").split(",").map(Number);
const b = await launch(); const problems = []; let n = 0;
for (const w of widths) {
  const page = await b.newPage(); await page.setViewport({ width: w, height: 800 });
  const errs = []; page.on("pageerror", (e) => errs.push(String(e).slice(0, 120))); page.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 120)));
  for (const p of PAGES) {
    await page.goto(BASE + p, { waitUntil: "load", timeout: 30000 }); await sleep(700);
    const r = await page.evaluate(() => { const vw = document.documentElement.clientWidth, sw = document.documentElement.scrollWidth;
      const off = [...document.querySelectorAll("body *")].filter((e) => { const x = e.getBoundingClientRect(); return x.width > 0 && x.right > vw + 1 && !e.closest(".marquee,[aria-hidden='true']") && getComputedStyle(e).position !== "fixed"; }).slice(0, 4).map((e) => `${e.tagName.toLowerCase()}.${String(e.className).slice(0, 50)}`);
      return { vw, sw, off }; });
    n++; if (r.sw > r.vw) problems.push(`DESBORDE ${w}px ${p}: ${r.sw} > ${r.vw} ${r.off.join(" | ")}`);
  }
  if (errs.length) problems.push(`ERRORES de consola a ${w}px: ${[...new Set(errs)].slice(0, 3).join(" || ")}`);
  await page.close();
}
await b.close();
console.log(`overflow: ${n} combinaciones (${PAGES.length} páginas × ${widths.length} anchos)`);
console.log(problems.length ? problems.join("\n") : "overflow: sin desbordes horizontales ni errores de consola");
process.exitCode = problems.length ? 1 : 0;
