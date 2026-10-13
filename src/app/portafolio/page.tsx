import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Portafolio", description: "RBIM3D y PortaCloud, las aplicaciones Android de BRORO." };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Portafolio" }]} eyebrow={`Portafolio · ${projects.length} proyectos`} title="Productos que ya construimos" text="Dos aplicaciones Android propias para obra y construcción, en camino a Google Play." />
      <section className="py-20">
        <Container>
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-lime-400"><span className="text-muted">01 /</span> Apps y productos</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} className="h-full">
                <SpotlightCard className="flex h-full flex-col p-8">
                  <p className="font-mono text-xs text-lime-400">{p.category}</p>
                  <h2 className="mt-3 text-3xl font-semibold">{p.name}</h2>
                  <p className="mt-3 text-muted">{p.summary}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--border-soft)] pt-5 text-sm">
                    <div><dt className="text-muted">Plataforma</dt><dd className="mt-1">{p.platform}</dd></div>
                    <div><dt className="text-muted">Versión</dt><dd className="mt-1">{p.version} · {p.status}</dd></div>
                  </dl>
                  <div className="mt-auto pt-8"><Button href={`/portafolio/${p.slug}`} arrow>Ver proyecto</Button></div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="¿Quieres algo así para tu equipo?" />
    </>
  );
}
