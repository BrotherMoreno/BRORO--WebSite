import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = { title: "Términos de uso" };

export default function Page() {
  return <PageStub title="Términos de uso" text="Texto legal provisional: debe ser revisado por un profesional antes de publicar." />;
}
