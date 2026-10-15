import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteUrl } from "@/lib/site-url";
import { site } from "@/content/site";

// Tipografías autoalojadas: next/font las precarga y ajusta la fuente de reserva para evitar saltos de diseño.
const display = localFont({ src: "../../fonts/bricolage-grotesque-latin-wght-normal.woff2", variable: "--font-display-loaded", weight: "200 800", display: "swap" });
const sans = localFont({ src: "../../fonts/inter-latin-wght-normal.woff2", variable: "--font-sans-loaded", weight: "100 900", display: "swap" });
const mono = localFont({ src: "../../fonts/jetbrains-mono-latin-wght-normal.woff2", variable: "--font-mono-loaded", weight: "100 800", display: "swap" });

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-gradient.png`,
    email: site.email,
    description: dict.meta.description,
    sameAs: site.socials.filter((s) => s.url).map((s) => s.url),
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: site.email, telephone: `+${site.whatsapp.number}`, availableLanguage: ["es", "en"] }],
  };
  return (
    <html lang={lang} className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime-400 focus:px-4 focus:py-2 focus:text-ink-950">{dict.common.skip}</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
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
