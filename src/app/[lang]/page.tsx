import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { About } from "@/sections/home/About";
import { Services } from "@/sections/home/Services";
import { FeaturedProjects } from "@/sections/home/FeaturedProjects";
import { Differentiators } from "@/sections/home/Differentiators";
import { Process } from "@/sections/home/Process";
import { CallToAction } from "@/sections/home/CallToAction";
import { Marquee } from "@/components/ui/Marquee";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLang } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDictionary(lang);
  return pageMetadata(lang, "", { absolute: `BRORO · ${d.meta.tagline}` }, d.meta.description);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLang(params);
  const dict = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} dict={dict} />
      <Marquee items={dict.home.capabilities} label={dict.home.capabilitiesLabel} />
      <About dict={dict} />
      <Services lang={lang} dict={dict} />
      <FeaturedProjects lang={lang} dict={dict} />
      <Differentiators dict={dict} />
      <Process dict={dict} />
      <CallToAction lang={lang} dict={dict} />
    </>
  );
}
