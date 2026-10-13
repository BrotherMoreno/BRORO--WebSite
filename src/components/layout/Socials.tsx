import { BrandIcon } from "../ui/BrandIcon";
import { site } from "@/content/site";

const base = "grid size-10 place-items-center rounded-full border border-[var(--border-soft)] transition";

export function Socials({ soon }: { soon: string }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {site.socials.map((s) => (
        <li key={s.id}>
          {s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} BRORO`}
              className={`${base} hover:-translate-y-0.5 hover:border-lime-400 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300`}>
              <BrandIcon brand={s.id} />
            </a>
          ) : (
            <span role="img" aria-label={`${s.label} (${soon})`} title={`${s.label} · ${soon}`} className={`${base} cursor-default opacity-40`}>
              <BrandIcon brand={s.id} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
