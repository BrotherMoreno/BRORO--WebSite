import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { Year } from "./Year";
import { site, nav, legalNav } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-soft)] bg-forest-900/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-lime-300 hover:underline">
            <Mail size={16} aria-hidden /> {site.email}
          </a>
        </div>
        <FooterList title="Sitio" items={nav} />
        <FooterList title="Legal" items={legalNav} />
      </Container>
      <Container className="border-t border-[var(--border-soft)] py-5 text-xs text-muted">
        © <Year /> {site.name}. Todos los derechos reservados.
      </Container>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">{title}</p>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (<li key={i.href}><Link href={i.href} className="hover:text-lime-300">{i.label}</Link></li>))}
      </ul>
    </div>
  );
}
