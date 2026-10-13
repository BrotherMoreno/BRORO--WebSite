import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/pages";
import { homeContent } from "@/content/home";

export const metadata: Metadata = { title: "Nosotros", description: "BRORO, empresa de desarrollo de software." };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Nosotros" }]} eyebrow="Nosotros" title="Una empresa de software que construye sus propios productos" text={about.intro} />
      <section className="py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal><div className="grid size-40 place-items-center rounded-3xl border border-[var(--border-soft)] bg-forest-800"><Image src="/brand/logo-gradient.png" alt="" width={110} height={110} /></div></Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-lime-400">{about.ceo.role}</p>
            <h2 className="mt-2 text-3xl font-semibold">{about.ceo.name}</h2>
            <p className="mt-3 max-w-xl text-muted">{about.ceo.text}</p>
          </Reveal>
        </Container>
      </section>
      <section className="pb-4">
        <Container>
          <Reveal><SectionHeading index="02" eyebrow="Proceso" title="Cómo trabajamos" /></Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {homeContent.process.map((s, i) => (
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
