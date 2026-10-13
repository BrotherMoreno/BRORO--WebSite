import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/motion/AnimatedHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVisual } from "./HeroVisual";
import { site } from "@/content/site";
import { homeContent } from "@/content/home";

const facts = [
  ["2", "apps Android propias"],
  ["v1.0", "rumbo a Google Play"],
  ["Offline", "funcionan sin internet"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgb(22_68_39/0.7),transparent)]" />
      <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-lime-400">{homeContent.eyebrow}</p>
          <AnimatedHeadline text={site.tagline} />
          <Reveal delay={0.5}>
            <p className="mt-6 max-w-xl text-lg text-muted">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/portafolio" arrow>Ver proyectos</Button>
              <Button href="/contacto" variant="secondary">Hablemos</Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--border-soft)] pt-6">
              {facts.map(([n, l]) => (
                <div key={n}><dt className="font-display text-2xl font-semibold text-lime-300">{n}</dt><dd className="mt-1 text-xs text-muted">{l}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
