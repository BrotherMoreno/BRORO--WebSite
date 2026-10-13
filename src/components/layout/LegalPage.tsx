import { PageHeader } from "./PageHeader";
import { Container } from "../ui/Container";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function LegalPage({ lang, dict, kind }: { lang: Locale; dict: Dict; kind: "privacy" | "terms" }) {
  const doc = dict.legal[kind];
  return (
    <>
      <PageHeader lang={lang} dict={dict} crumbs={[{ label: dict.legal.crumb }, { label: doc.title }]} title={doc.title} />
      <Container className="max-w-3xl space-y-5 py-12 text-muted sm:space-y-6 sm:py-14">
        <p className="rounded-2xl border border-lime-400/30 p-4 text-sm text-lime-300">{dict.legal.draft}</p>
        {doc.paragraphs.map((t) => <p key={t}>{t}</p>)}
      </Container>
    </>
  );
}
