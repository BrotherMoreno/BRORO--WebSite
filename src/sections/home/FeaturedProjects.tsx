import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function FeaturedProjects({ lang, dict }: { lang: Locale; dict: Dict }) {
  const f = dict.home.featured;
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal><SectionHeading index="02" eyebrow={f.eyebrow} title={f.title} text={f.text} /></Reveal>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {dict.projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
                <p className="font-mono text-xs text-lime-400">{p.category} · {p.status}</p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{p.name}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {dict.home.highlights[p.slug]?.map((h) => (
                    <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-400" />{h}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8"><Button href={localePath(lang, `/portafolio/${p.slug}`)} variant="secondary" arrow>{dict.common.viewProject}</Button></div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
