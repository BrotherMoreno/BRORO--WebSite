import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { homeContent } from "@/content/home";

export function Process() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading eyebrow="Proceso" title="Cómo trabajamos" /></Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {homeContent.process.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1}>
                <span className="font-mono text-sm text-lime-400">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
