import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portafolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function Page({ params }: PageProps<"/portafolio/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const facts = [["Plataforma", p.platform], ["Versión", `${p.version} · ${p.status}`], ["Sin internet", p.offline], ["Categoría", p.category]];
  return (
    <>
      <PageHeader crumbs={[{ label: "Portafolio", href: "/portafolio" }, { label: p.name }]} eyebrow={p.category} title={p.name} text={p.summary} />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {p.modules.map((m, i) => (
              <Reveal key={m.title}>
                <SpotlightCard className="p-7">
                  <p className="font-mono text-xs text-lime-400">0{i + 1} /</p>
                  <h2 className="mt-2 text-2xl font-semibold">{m.title}</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {m.items.map((it) => (<li key={it} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-lime-400" aria-hidden />{it}</li>))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-[var(--border-soft)] bg-forest-800 p-6">
              <h2 className="font-mono text-xs uppercase tracking-widest text-lime-400">Ficha</h2>
              <dl className="mt-4 space-y-4 text-sm">
                {facts.map(([k, v]) => (<div key={k}><dt className="text-muted">{k}</dt><dd className="mt-1">{v}</dd></div>))}
              </dl>
            </div>
            <div className="rounded-3xl border border-dashed border-[var(--border-soft)] p-6 text-sm text-muted">
              Capturas de pantalla: pendientes de añadir cuando estén disponibles.
            </div>
            <Link href={`/portafolio/${next.slug}`} className="block rounded-3xl border border-[var(--border-soft)] p-6 transition hover:border-lime-400/50">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Siguiente proyecto</span>
              <span className="mt-2 block font-display text-2xl font-semibold">{next.name} →</span>
            </Link>
          </aside>
        </Container>
      </section>
      <CtaBand title={`¿Te interesa ${p.name}?`} text="Escríbenos y te contamos más." />
    </>
  );
}
