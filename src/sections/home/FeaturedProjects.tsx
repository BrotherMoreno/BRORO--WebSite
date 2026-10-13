import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";
import { projectHighlights } from "@/content/home";

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading index="02" eyebrow="Portafolio" title="Proyectos destacados" text="Dos aplicaciones Android propias, listas para su versión 1.0." /></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-8">
                <p className="font-mono text-xs text-lime-400">{p.category} · {p.status}</p>
                <h3 className="mt-3 text-3xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {projectHighlights[p.slug]?.map((h) => (
                    <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-400" />{h}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8"><Button href={`/portafolio/${p.slug}`} variant="secondary" arrow>Ver proyecto</Button></div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
