// Lighthouse móvil y escritorio (rendimiento, accesibilidad, buenas prácticas y SEO). Valores de laboratorio simulados.
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { launch, BASE } from "./lib.mjs";
const targets = (process.env.LH_PAGES || "/es,/es/contacto,/en/portafolio/rbim3d").split(",");
const b = await launch(["--remote-debugging-port=9333"]); const port = Number(new URL(b.wsEndpoint()).port);
const pct = (n) => Math.round(n * 100);
for (const mode of ["mobile", "desktop"]) for (const t of targets) {
  const r = await lighthouse(BASE + t, { port, output: "json", logLevel: "error", onlyCategories: ["performance", "accessibility", "best-practices", "seo"] }, mode === "desktop" ? desktopConfig : undefined);
  const c = r.lhr.categories, a = r.lhr.audits, v = (id) => a[id]?.displayValue || "-";
  console.log(`${mode.padEnd(7)} ${t.padEnd(26)} perf ${pct(c.performance.score)} | a11y ${pct(c.accessibility.score)} | best ${pct(c["best-practices"].score)} | seo ${pct(c.seo.score)} || LCP ${v("largest-contentful-paint")} · CLS ${v("cumulative-layout-shift")} · TBT ${v("total-blocking-time")} · FCP ${v("first-contentful-paint")}`);
}
await b.close();
