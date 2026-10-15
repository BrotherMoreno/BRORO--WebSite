import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/portafolio">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const p = getDictionary(lang).portfolio;
  return pageMetadata(lang, "/portafolio", p.meta.title, p.meta.description);
}

export default async function Page({ params }: PageProps<"/[lang]/portafolio">) {
  const lang = await resolveLang(params);
  const dict = getDictionary(lang);
  const p = dict.portfolio;
  return (
    <>
      <PageHeader lang={lang} dict={dict} crumbs={[{ label: p.header.crumb }]} eyebrow={p.header.eyebrow.replace("{n}", String(dict.projects.length))} title={p.header.title} text={p.header.text} />
      <section className="py-14 sm:py-20">
        <Container>
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-lime-400"><span className="text-muted">01 /</span> {p.section}</p>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {dict.projects.map((pr, i) => (
              <Reveal key={pr.slug} delay={i * 0.1} className="h-full">
                <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
                  <p className="font-mono text-xs text-lime-400">{pr.category}</p>
                  <h2 translate="no" className="mt-3 text-2xl font-semibold sm:text-3xl">{pr.name}</h2>
                  <p className="mt-3 text-muted">{pr.summary}</p>
                  <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--border-soft)] pt-5 text-sm sm:grid-cols-2">
                    <div><dt className="text-muted">{p.platform}</dt><dd className="mt-1">{pr.platform}</dd></div>
                    <div><dt className="text-muted">{p.version}</dt><dd className="mt-1">{pr.version} · {pr.status}</dd></div>
                  </dl>
                  <div className="mt-auto pt-8"><Button href={localePath(lang, `/portafolio/${pr.slug}`)} arrow>{dict.common.viewProject}</Button></div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand lang={lang} dict={dict} title={p.ctaTitle} />
    </>
  );
}
