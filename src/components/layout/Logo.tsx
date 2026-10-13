import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";

export function Logo({ lang, label }: { lang: Locale; label: string }) {
  return (
    <Link href={localePath(lang)} className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-lime-300" aria-label={label}>
      <Image src="/brand/logo-gradient.png" alt="" width={36} height={36} priority className="size-8 sm:size-9" />
      <span className="font-display text-lg font-bold tracking-tight sm:text-xl">{site.name}</span>
    </Link>
  );
}
