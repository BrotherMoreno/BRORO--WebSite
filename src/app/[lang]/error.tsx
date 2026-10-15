"use client";
import { Container } from "@/components/ui/Container";

// Pantalla de error de ejecución. No recibe el idioma: mensaje bilingüe.
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-400">Error</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Algo salió mal · Something went wrong</h1>
      <button type="button" onClick={reset} className="mt-8 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-ink-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">
        Reintentar · Try again
      </button>
    </Container>
  );
}
