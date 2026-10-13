import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-[var(--ease-brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300";
const variants: Record<Variant, string> = {
  primary: "bg-lime-400 text-ink-950 hover:bg-lime-300 hover:-translate-y-0.5",
  secondary: "border border-lime-400/40 text-paper-50 hover:border-lime-400 hover:bg-lime-400/10",
  ghost: "text-paper-50 hover:text-lime-300",
};

type Props = { href: string; variant?: Variant; className?: string; children: React.ReactNode } & Omit<React.ComponentProps<typeof Link>, "href">;

export function Button({ href, variant = "primary", className = "", children, ...rest }: Props) {
  const external = /^(https?:|mailto:)/.test(href);
  const cls = `${base} ${variants[variant]} ${className}`;
  return external ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls} {...rest}>{children}</Link>
  );
}
