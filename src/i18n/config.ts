export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const localePath = (lang: Locale, path = "") => `/${lang}${path === "/" ? "" : path}`;
export const languageNames: Record<Locale, string> = { es: "Español", en: "English" };
export const projectSlugs = ["rbim3d", "portacloud"] as const;
