type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3.5">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-violet-300/90">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl leading-7 text-zinc-300/95">{description}</p> : null}
    </div>
  );
}
