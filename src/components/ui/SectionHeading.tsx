export function SectionHeading({ eyebrow, index, title, text }: { eyebrow?: string; index?: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime-400">
          {index && <span className="mr-2 text-muted">{index} /</span>}{eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  );
}
