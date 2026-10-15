import type { Metadata } from "next";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export async function resolveLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

export function pageMetadata(lang: Locale, path: string, title: Metadata["title"] | undefined, description: string): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  languages["x-default"] = `/${defaultLocale}${path}`;
  const ogTitle = typeof title === "string" ? title : title && "absolute" in title ? title.absolute : undefined;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: `/${lang}${path}`, languages },
    openGraph: { ...(ogTitle ? { title: ogTitle } : {}), description, siteName: "BRORO", type: "website", locale: lang === "es" ? "es_PE" : "en_US", url: `/${lang}${path}`, images: [{ url: "/og.png", width: 1200, height: 630, alt: "BRORO" }] },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}
