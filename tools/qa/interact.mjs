// Pruebas de interacción: menú móvil, selector de país, validación y WhatsApp. Guarda capturas en ./out
import { launch, BASE, OUT, sleep, scrollAll } from "./lib.mjs";
const out = []; const ok = (name, cond, extra = "") => out.push(`${cond ? "OK   " : "FALLO"} ${name}${extra ? " — " + extra : ""}`);
{ // menú móvil
  const b = await launch(); const page = await b.newPage(); await page.setViewport({ width: 375, height: 800, isMobile: true, hasTouch: true });
  await page.goto(BASE + "/es", { waitUntil: "load" }); await sleep(900);
  ok("Menú móvil cerrado al inicio", !(await page.$("#mobile-menu")));
  await page.click('button[aria-controls="mobile-menu"]'); await sleep(300);
  ok("Menú móvil se abre", !!(await page.$("#mobile-menu")));
  const items = await page.$$eval("#mobile-menu a", (a) => a.map((x) => x.textContent?.trim()));
  ok("Menú lista Servicios, Contacto y el botón", items.includes("Servicios") && items.includes("Contacto") && items.includes("Hablemos"), items.join(", "));
  await page.screenshot({ path: OUT + "m375_menu.png" });
  await page.keyboard.press("Escape"); await sleep(300); ok("Escape cierra el menú", !(await page.$("#mobile-menu")));
  await page.click('button[aria-controls="mobile-menu"]'); await sleep(300);
  await page.click('#mobile-menu a[href="/es/servicios"]'); await sleep(1500);
  ok("Navegar desde el menú cambia de página y lo cierra", page.url().endsWith("/es/servicios") && !(await page.$("#mobile-menu")), page.url());
  await b.close();
}
{ // contacto
  const b = await launch(); const page = await b.newPage(); await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(BASE + "/es/contacto", { waitUntil: "load" }); await sleep(900);
  await page.evaluate(() => { window.__opened = []; window.open = (u) => { window.__opened.push(u); return null; }; });
  const first = await page.$eval('select[name="pais"]', (s) => s.options[s.selectedIndex].text); ok("País por defecto: Perú (+51)", first === "Perú (+51)", first);
  const n = await page.$eval('select[name="pais"]', (s) => s.options.length); ok("245 países en el selector", n === 245, String(n));
  await page.select('select[name="pais"]', "US"); await sleep(200);
  const prefix = await page.$eval("#telefono", (i) => i.parentElement.querySelector("span").textContent); ok("Al elegir Estados Unidos el prefijo es +1", prefix === "+1", prefix);
  await page.click('button[type="button"][class*="jade"]'); await sleep(300);
  const errs = await page.$$eval('[role="alert"]', (e) => e.map((x) => x.textContent)); ok("Formulario vacío: 5 errores localizados", errs.length === 5, errs.join(" | "));
  ok("WhatsApp no se abre con datos inválidos", (await page.evaluate(() => window.__opened.length)) === 0);
  await page.type("#nombre", "Ana Pérez"); await page.type("#correo", "ana@empresa.com"); await page.type("#telefono", "555 123 4567");
  await page.select("#servicio", "web"); await page.select("#presupuesto", "standard"); await page.type("#mensaje", "Necesito una plataforma web para mi empresa."); await page.click("#nda");
  await page.click('button[type="button"][class*="jade"]'); await sleep(400);
  const opened = await page.evaluate(() => window.__opened[0] || ""); const text = decodeURIComponent(opened.split("text=")[1] || "");
  ok("WhatsApp abre wa.me/51929259109", opened.startsWith("https://wa.me/51929259109?text="), opened.slice(0, 45));
  ok("Mensaje con país, prefijo, servicio, presupuesto, NDA y correo", ["Estados Unidos", "+1 555 123 4567", "Desarrollo web", "$2,500", "Requiere NDA: Sí", "ana@empresa.com"].every((s) => text.includes(s)));
  ok("Mensaje de estado visible", !!(await page.$('[role="status"]')));
  await scrollAll(page); await page.screenshot({ path: OUT + "m390_contacto.png", fullPage: true });
  await b.close();
}
{ // FAQ nativo
  const b = await launch(); const page = await b.newPage(); await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE + "/es/contacto", { waitUntil: "load" }); await sleep(900);
  const st = await page.$$eval("details", (d) => d.map((x) => x.open)); ok("FAQ: 5 preguntas, solo la primera abierta", st.length === 5 && st[0] && st.slice(1).every((x) => !x), JSON.stringify(st));
  await (await page.$$("details summary"))[1].click(); await sleep(300);
  ok("FAQ: al pulsar una pregunta se abre", await page.evaluate(() => document.querySelectorAll("details")[1].open));
  await b.close();
}
console.log(out.join("\n")); process.exitCode = out.some((l) => l.startsWith("FALLO")) ? 1 : 0;
