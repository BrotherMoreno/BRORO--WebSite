import { brandPaths, type Brand } from "./brand-paths";

export function BrandIcon({ brand, size = 20, className = "" }: { brand: Brand; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden focusable="false" className={className}>
      <path d={brandPaths[brand]} />
    </svg>
  );
}
