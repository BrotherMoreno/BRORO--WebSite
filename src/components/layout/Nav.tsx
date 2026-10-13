"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";

const link = "rounded-md px-3 py-2 text-sm transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300";

export function NavLinks() {
  const path = usePathname();
  return (
    <nav aria-label="Principal" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {nav.map((i) => (
          <li key={i.href}>
            <Link href={i.href} aria-current={path.startsWith(i.href) ? "page" : undefined}
              className={`${link} ${path.startsWith(i.href) ? "text-lime-400" : "text-paper-50"}`}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="md:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((o) => !o)}
        className="grid size-10 place-items-center rounded-full border border-[var(--border-soft)] focus-visible:outline-2 focus-visible:outline-lime-300">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Móvil" className="absolute inset-x-0 top-16 border-b border-[var(--border-soft)] bg-ink-950 px-5 py-4">
          <ul className="flex flex-col">
            {nav.map((i) => (
              <li key={i.href}><Link href={i.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{i.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
