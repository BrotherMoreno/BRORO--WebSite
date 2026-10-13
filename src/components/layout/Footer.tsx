import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { Year } from "./Year";
import { Socials } from "./Socials";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function Footer({ lang, dict }: { lang: Locale; dict: Dict }) {
  const f = dict.footer;
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)] bg-forest-900/40 sm:mt-24">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_minmax(16rem,1.5fr)]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo lang={lang} label={dict.common.logoLabel} />
          <p className="mt-4 max-w-xs text-sm text-muted">{dict.meta.tagline}</p>
        </div>
        <FooterList title={f.site} items={dict.nav.map((n) => ({ href: localePath(lang, n.path), label: n.label }))} />
        <FooterList title={f.legal} items={dict.legalNav.map((n) => ({ href: localePath(lang, n.path), label: n.label }))} />
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">{f.contact}</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="inline-flex items-start gap-2 [overflow-wrap:anywhere] hover:text-lime-300"><Mail size={16} className="mt-0.5 shrink-0 text-lime-400" aria-hidden />{site.email}</a></li>
            <li><a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-lime-300"><MessageCircle size={16} className="shrink-0 text-lime-400" aria-hidden />{site.whatsapp.display}<span className="sr-only">{dict.common.newTab}</span></a></li>
          </ul>
          <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-widest text-lime-400">{f.follow}</p>
          <Socials soon={f.soon} />
        </div>
      </Container>
      <Container className="border-t border-[var(--border-soft)] py-5 text-xs text-muted">
        © <Year /> {site.name}. {f.rights}
      </Container>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">{title}</p>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (<li key={i.href}><Link href={i.href} className="hover:text-lime-300">{i.label}</Link></li>))}
      </ul>
    </div>
  );
}
