import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { homeContent } from "@/content/home";

export function Capabilities() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading eyebrow="Capacidades" title="Demostradas en nuestros proyectos" /></Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {homeContent.capabilities.map((c) => (
              <li key={c} className="rounded-full border border-[var(--border-soft)] bg-forest-900/60 px-4 py-2 font-mono text-sm">{c}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
