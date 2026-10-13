import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Legal" }, { label: "Política de privacidad" }]} title="Política de privacidad" />
      <Container className="max-w-3xl space-y-6 py-14 text-muted">
        <p className="rounded-2xl border border-lime-400/30 p-4 text-sm text-lime-300">Borrador provisional: debe ser revisado por un profesional legal antes de publicar el sitio.</p>
        <p>Este sitio presenta a BRORO y sus proyectos. Actualmente no usa cookies de seguimiento ni herramientas de analítica.</p><p>El formulario de contacto no guarda datos en el sitio: prepara un correo en tu aplicación de correo y los datos que escribas solo se envían si pulsas enviar.</p><p>Si nos escribes, usaremos tu mensaje únicamente para responderte. Para consultas sobre tus datos, escribe a BroroTechnologies@outlook.com.</p><p>Si en el futuro se añaden analítica, cookies o un servicio de envío de formularios, esta política se actualizará.</p>
      </Container>
    </>
  );
}
