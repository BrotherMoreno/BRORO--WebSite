"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce), (max-width: 767px)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(query);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
// En servidor devuelve true: primero estático, y en cliente se activa el 3D si procede.
const useStatic = () => useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => true);

function StaticLogo() {
  return <Image src="/brand/logo-gradient.png" alt="" width={320} height={320} priority className="mx-auto w-48 sm:w-64" />;
}

const RibbonCanvas = dynamic(() => import("./RibbonCanvas"), { ssr: false, loading: () => <StaticLogo /> });

export function HeroVisual() {
  const isStatic = useStatic();
  return (
    <div aria-hidden className="relative grid aspect-square w-full place-items-center">
      <div className="absolute inset-8 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="relative size-full">{isStatic ? <div className="grid size-full place-items-center"><StaticLogo /></div> : <RibbonCanvas />}</div>
    </div>
  );
}
