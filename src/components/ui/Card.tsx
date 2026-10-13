export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-[var(--border-soft)] bg-forest-800 p-6 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.8)] transition duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-lime-400/50 ${className}`}>
      {children}
    </div>
  );
}
