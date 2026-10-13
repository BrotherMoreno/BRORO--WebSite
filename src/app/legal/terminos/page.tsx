import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Términos de uso" };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Legal" }, { label: "Términos de uso" }]} title="Términos de uso" />
      <Container className="max-w-3xl space-y-6 py-14 text-muted">
        <p className="rounded-2xl border border-lime-400/30 p-4 text-sm text-lime-300">Borrador provisional: debe ser revisado por un profesional legal antes de publicar el sitio.</p>
        <p>El contenido de este sitio es informativo. Las funciones de RBIM3D y PortaCloud descritas corresponden a la versión 1.0 en preparación y pueden cambiar antes de su publicación en Google Play.</p><p>Los logotipos, textos y diseños pertenecen a BRORO. No se permite su reproducción sin autorización.</p><p>BRORO puede actualizar el sitio y estos términos en cualquier momento. Para consultas: BroroTechnologies@outlook.com.</p>
      </Container>
    </>
  );
}
