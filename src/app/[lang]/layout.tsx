import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: `BRORO · ${dict.meta.tagline}`, template: "%s · BRORO" },
    description: dict.meta.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <html lang={lang} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime-400 focus:px-4 focus:py-2 focus:text-ink-950">{dict.common.skip}</a>
        <MotionProvider>
          <ScrollProgress />
          <Header lang={lang} dict={dict} />
          <main id="contenido" className="flex-1">{children}</main>
          <Footer lang={lang} dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
