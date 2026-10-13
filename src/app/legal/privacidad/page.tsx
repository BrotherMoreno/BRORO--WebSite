import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return <PageStub title="Política de privacidad" text="Texto legal provisional: debe ser revisado por un profesional antes de publicar." />;
}
