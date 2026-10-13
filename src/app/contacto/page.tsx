import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = { title: "Contacto" };

export default function Page() {
  return <PageStub title="Contacto" text="Escríbenos a BroroTechnologies@outlook.com. El formulario real llega en la Fase 6." />;
}
