"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, languageNames, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
  return (
    <div role="group" aria-label={label} className={`items-center rounded-full border border-[var(--border-soft)] p-0.5 font-mono text-xs ${className}`}>
      {locales.map((l) => (
        <Link key={l} href={`/${l}${rest}`} hrefLang={l} lang={l} title={languageNames[l]} aria-label={languageNames[l]}
          aria-current={l === lang ? "true" : undefined}
          onClick={() => { document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`; }}
          className={`rounded-full px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-lime-300 ${l === lang ? "bg-lime-400 font-semibold text-ink-950" : "text-paper-50 hover:text-lime-300"}`}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
