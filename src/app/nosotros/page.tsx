import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = { title: "Nosotros" };

export default function Page() {
  return <PageStub title="Nosotros" text="Información de BRORO y de su CEO. Contenido definitivo en la Fase 4." />;
}
