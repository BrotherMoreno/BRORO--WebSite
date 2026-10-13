import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { Steps } from "@/sections/home/Process";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLang } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/servicios">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const s = getDictionary(lang).services;
  return pageMetadata(lang, "/servicios", s.meta.title, s.meta.description);
}

export default async function Page({ params }: PageProps<"/[lang]/servicios">) {
  const lang = await resolveLang(params);
  const dict = getDictionary(lang);
  const s = dict.services;
  return (
    <>
      <PageHeader lang={lang} dict={dict} crumbs={[{ label: s.header.eyebrow }]} eyebrow={s.header.eyebrow} title={s.header.title} text={s.header.text} />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {s.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.08} className="h-full">
                <SpotlightCard className="h-full p-6 sm:p-8">
                  <p className="font-mono text-xs text-lime-400">0{i + 1} /</p>
                  <h2 className="mt-3 text-xl font-semibold sm:text-2xl">{it.title}</h2>
                  <p className="mt-3 text-muted">{it.text}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {it.bullets.map((b) => (<li key={b} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-lime-400" aria-hidden />{b}</li>))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-4">
        <Container>
          <Reveal><SectionHeading index="02" eyebrow={s.start.eyebrow} title={s.start.title} /></Reveal>
          <Steps steps={s.start.steps} cols="md:grid-cols-3" />
        </Container>
      </section>
      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
