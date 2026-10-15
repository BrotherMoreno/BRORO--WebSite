import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import fs from "node:fs";

export const BASE = process.env.BASE || "http://localhost:3100";
export const OUT = new URL("./out/", import.meta.url).pathname;
fs.mkdirSync(OUT, { recursive: true });
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const launch = async (extra = []) => puppeteer.launch({ args: [...chromium.args, ...extra], executablePath: await chromium.executablePath(), headless: "shell" });
export const scrollAll = async (page) => {
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)); } window.scrollTo(0, 0); });
  await sleep(800);
};
export const PAGES = (process.env.PAGES || "/es,/en,/es/servicios,/en/servicios,/es/portafolio,/en/portafolio,/es/portafolio/rbim3d,/en/portafolio/portacloud,/es/nosotros,/en/nosotros,/es/contacto,/en/contacto,/es/legal/privacidad,/en/legal/terminos").split(",");
