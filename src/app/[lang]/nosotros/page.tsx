import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Steps } from "@/sections/home/Process";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLang } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const a = getDictionary(lang).about;
  return pageMetadata(lang, "/nosotros", a.meta.title, a.meta.description);
}

export default async function Page({ params }: PageProps<"/[lang]/nosotros">) {
  const lang = await resolveLang(params);
  const dict = getDictionary(lang);
  const a = dict.about;
  return (
    <>
      <PageHeader lang={lang} dict={dict} crumbs={[{ label: a.header.crumb }]} eyebrow={a.header.eyebrow} title={a.header.title} text={a.header.text} />
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-8 sm:gap-10 md:grid-cols-[auto_1fr]">
          <Reveal><div className="grid size-32 place-items-center rounded-3xl border border-[var(--border-soft)] bg-forest-800 sm:size-40"><Image src="/brand/logo-gradient.png" alt="" width={110} height={110} className="w-20 sm:w-[110px]" /></div></Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-lime-400">{a.ceo.role}</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{a.ceo.name}</h2>
            <p className="mt-3 max-w-xl text-muted">{a.ceo.text}</p>
          </Reveal>
        </Container>
      </section>
      <section className="pb-4">
        <Container>
          <Reveal><SectionHeading index="02" eyebrow={dict.home.process.eyebrow} title={dict.home.process.title} /></Reveal>
          <Steps steps={dict.home.process.steps} />
        </Container>
      </section>
      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
