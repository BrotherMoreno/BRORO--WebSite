import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { servicesDetail, startSteps } from "@/content/pages";

export const metadata: Metadata = { title: "Servicios", description: "Software a medida, aplicaciones Android y aplicaciones web." };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Servicios" }]} eyebrow="Servicios" title="Software, apps y web hechos a la medida" text="Desarrollamos soluciones para Android y la web, con la experiencia de haber creado dos productos propios." />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesDetail.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08} className="h-full">
                <SpotlightCard className="h-full p-8">
                  <p className="font-mono text-xs text-lime-400">0{i + 1} /</p>
                  <h2 className="mt-3 text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.text}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.bullets.map((b) => (<li key={b} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-lime-400" aria-hidden />{b}</li>))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-4">
        <Container>
          <Reveal><SectionHeading index="02" eyebrow="Cómo empezamos" title="De la idea a la propuesta" /></Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {startSteps.map((s, i) => (
              <li key={s.title}><Reveal delay={i * 0.1}>
                <span className="font-mono text-sm text-lime-400">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </Reveal></li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
