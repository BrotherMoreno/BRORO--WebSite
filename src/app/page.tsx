import Image from "next/image";
import { site } from "@/content/site";

// Página temporal de Fase 1: solo verifica logo, tokens y fuentes.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <Image src="/brand/logo-gradient.png" alt={`Logo de ${site.name}`} width={160} height={160} priority />
      <h1 className="text-5xl font-semibold">{site.name}</h1>
      <p className="max-w-md text-muted">{site.tagline}</p>
      <span className="rounded-full bg-lime-400 px-5 py-2 font-mono text-sm text-ink-950">Fase 1 · base operativa</span>
    </main>
  );
}
