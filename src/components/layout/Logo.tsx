import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-lime-300" aria-label={`${site.name}, inicio`}>
      <Image src="/brand/logo-gradient.png" alt="" width={36} height={36} priority />
      <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
    </Link>
  );
}
