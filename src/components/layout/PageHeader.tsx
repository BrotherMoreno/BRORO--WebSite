import Link from "next/link";
import { Container } from "../ui/Container";

export function PageHeader({ crumbs, eyebrow, title, text }: { crumbs: { label: string; href?: string }[]; eyebrow?: string; title: string; text?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-soft)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_0%,rgb(22_68_39/0.6),transparent)]" />
      <Container className="relative py-16 sm:py-20">
        <nav aria-label="Ruta de navegación" className="mb-6 font-mono text-xs text-muted">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-lime-300">Inicio</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex gap-2"><span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="hover:text-lime-300">{c.label}</Link> : <span aria-current={i === crumbs.length - 1 ? "page" : undefined} className="text-paper-50">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-muted">{text}</p>}
      </Container>
    </section>
  );
}
