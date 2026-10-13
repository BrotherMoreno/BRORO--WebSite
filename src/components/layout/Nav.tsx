"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "../ui/Button";
import type { Locale } from "@/i18n/config";

type Item = { href: string; label: string };
const link = "rounded-md px-3 py-2 text-sm transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300";

export function NavLinks({ items, label }: { items: Item[]; label: string }) {
  const path = usePathname();
  return (
    <nav aria-label={label} className="hidden md:block">
      <ul className="flex items-center gap-0.5 lg:gap-1">
        {items.map((i) => {
          const active = path === i.href || path.startsWith(`${i.href}/`);
          return (
            <li key={i.href}>
              <Link href={i.href} aria-current={active ? "page" : undefined} className={`${link} ${active ? "text-lime-400" : "text-paper-50"}`}>{i.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type MobileProps = { items: Item[]; lang: Locale; navLabel: string; open: string; close: string; languageLabel: string; cta: Item };

export function MobileNav({ items, lang, navLabel, open: openLabel, close, languageLabel, cta }: MobileProps) {
  const path = usePathname();
  // El menú se considera abierto solo en la ruta donde se abrió: al navegar (incluido cambiar de idioma) se cierra solo.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => setOpenAt((cur) => ((typeof v === "function" ? v(cur === path) : v) ? path : null));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="md:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? close : openLabel}
        onClick={() => setOpen((o) => !o)}
        className="grid size-10 place-items-center rounded-full border border-[var(--border-soft)] focus-visible:outline-2 focus-visible:outline-lime-300">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label={navLabel} className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[var(--border-soft)] bg-ink-950 px-5 py-4">
          <ul className="flex flex-col">
            {items.map((i) => (
              <li key={i.href}><Link href={i.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{i.label}</Link></li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--border-soft)] pt-4">
            <LanguageSwitcher lang={lang} label={languageLabel} className="inline-flex" />
            <Button href={cta.href} className="grow !py-2.5 sm:grow-0">{cta.label}</Button>
          </div>
        </nav>
      )}
    </div>
  );
}
