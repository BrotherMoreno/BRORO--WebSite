import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/motion/AnimatedHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVisual } from "./HeroVisual";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgb(22_68_39/0.7),transparent)]" />
      <Container className="relative grid items-center gap-8 py-10 sm:gap-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-lime-400 sm:mb-5">{dict.home.eyebrow}</p>
          <AnimatedHeadline text={dict.meta.tagline} />
          <Reveal delay={0.5}>
            <p className="mt-5 max-w-xl text-base text-muted sm:mt-6 sm:text-lg">{dict.meta.description}</p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <Button href={localePath(lang, "/portafolio")} arrow>{dict.common.viewProjects}</Button>
              <Button href={localePath(lang, "/contacto")} variant="secondary">{dict.common.talk}</Button>
            </div>
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-3 border-t border-[var(--border-soft)] pt-6 sm:mt-10 sm:gap-4">
              {dict.home.facts.map(([n, l]) => (
                <div key={n}><dt className="font-display text-xl font-semibold text-lime-300 sm:text-2xl">{n}</dt><dd className="mt-1 text-xs text-muted">{l}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
