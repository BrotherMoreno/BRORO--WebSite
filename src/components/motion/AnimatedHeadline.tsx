// Titular con entrada palabra por palabra solo con CSS: visible sin esperar a JavaScript.
export function AnimatedHeadline({ text }: { text: string }) {
  return (
    <h1 aria-label={text} className="text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-1 align-bottom">
          <span className="word-up" style={{ "--i": i } as React.CSSProperties}>{w}&nbsp;</span>
        </span>
      ))}
    </h1>
  );
}
