import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { Dict } from "@/i18n/types";

export function Steps({ steps, cols = "md:grid-cols-4" }: { steps: { title: string; text: string }[]; cols?: string }) {
  return (
    <ol className={`mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 ${cols}`}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 0.1}>
            <span className="font-mono text-sm text-lime-400">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold sm:text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function Process({ dict, index = "04" }: { dict: Dict; index?: string }) {
  const p = dict.home.process;
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal><SectionHeading index={index} eyebrow={p.eyebrow} title={p.title} /></Reveal>
        <Steps steps={p.steps} />
      </Container>
    </section>
  );
}
