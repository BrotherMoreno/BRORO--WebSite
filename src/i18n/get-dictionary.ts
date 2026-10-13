import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";
import type { Locale } from "./config";
import type { Dict } from "./types";

const dictionaries: Record<Locale, Dict> = { es, en };
export const getDictionary = (lang: Locale): Dict => dictionaries[lang];
