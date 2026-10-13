import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = { title: "Portafolio" };

export default function Page() {
  return <PageStub title="Portafolio" text="RBIM3D y PortaCloud, nuestros proyectos reales. Fichas completas en la Fase 4." />;
}
