import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Los not-found no reciben el idioma: mensaje bilingüe.
export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-400">404</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Página no encontrada · Page not found</h1>
      <div className="mt-8 flex justify-center gap-4 text-lime-300 underline">
        <Link href="/es">Ir al inicio</Link><Link href="/en">Go to home</Link>
      </div>
    </Container>
  );
}
