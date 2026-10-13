import type { MetadataRoute } from "next";
import { locales, projectSlugs } from "@/i18n/config";
import { siteUrl } from "@/lib/site-url";

const paths = ["", "/servicios", "/portafolio", "/nosotros", "/contacto", "/legal/privacidad", "/legal/terminos", ...projectSlugs.map((s) => `/portafolio/${s}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((l) => paths.map((p) => ({
    url: `${siteUrl}/${l}${p}`,
    alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${siteUrl}/${x}${p}`])) },
  })));
}
