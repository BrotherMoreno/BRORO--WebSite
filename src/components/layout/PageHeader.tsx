import Link from "next/link";
import { Container } from "../ui/Container";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function PageHeader({ lang, dict, crumbs, eyebrow, title, text }: { lang: Locale; dict: Dict; crumbs: { label: string; href?: string }[]; eyebrow?: string; title: string; text?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_0%,rgb(22_68_39/0.6),transparent)]" />
      <Container className="relative py-12 sm:py-20">
        <nav aria-label={dict.common.breadcrumb} className="mb-5 font-mono text-xs text-muted sm:mb-6">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            <li><Link href={localePath(lang)} className="hover:text-lime-300">{dict.common.home}</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex gap-2"><span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="hover:text-lime-300">{c.label}</Link> : <span aria-current={i === crumbs.length - 1 ? "page" : undefined} className="text-paper-50">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-base text-muted sm:mt-5 sm:text-lg">{text}</p>}
      </Container>
    </section>
  );
}
