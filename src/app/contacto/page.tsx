import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/layout/ContactForm";
import { startSteps } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contacto", description: "Escribe a BRORO para hablar de tu proyecto." };

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Contacto" }]} eyebrow="Contacto" title="Hablemos de tu proyecto" text="Cuéntanos qué necesitas resolver. Te respondemos por correo." />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-xl font-semibold hover:text-lime-300"><Mail className="text-lime-400" aria-hidden /> {site.email}</a>
            <ol className="mt-10 space-y-6">
              {startSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4"><span className="font-mono text-sm text-lime-400">0{i + 1}</span><div><h2 className="font-semibold">{s.title}</h2><p className="mt-1 text-sm text-muted">{s.text}</p></div></li>
              ))}
            </ol>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
