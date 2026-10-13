import { countryDialCodes } from "./countries";
import type { Locale } from "./config";

export type CountryOption = { iso: string; name: string; code: string };

// Nombres localizados con Intl.DisplayNames; Perú primero (país por defecto) y el resto en orden alfabético.
export function getCountryOptions(lang: Locale): CountryOption[] {
  const names = new Intl.DisplayNames([lang], { type: "region" });
  const all = countryDialCodes.map(([iso, code]) => ({ iso, code, name: names.of(iso) ?? iso }));
  all.sort((a, b) => a.name.localeCompare(b.name, lang));
  const peru = all.findIndex((c) => c.iso === "PE");
  return peru > 0 ? [all[peru], ...all.slice(0, peru), ...all.slice(peru + 1)] : all;
}
