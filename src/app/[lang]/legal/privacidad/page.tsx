import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLang } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/legal/privacidad">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const doc = getDictionary(lang).legal.privacy;
  return pageMetadata(lang, "/legal/privacidad", doc.title, doc.paragraphs[0]);
}

export default async function Page({ params }: PageProps<"/[lang]/legal/privacidad">) {
  const lang = await resolveLang(params);
  return <LegalPage lang={lang} dict={getDictionary(lang)} kind="privacy" />;
}
