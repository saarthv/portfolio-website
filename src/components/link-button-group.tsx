import Link from "next/link";

export type LinkButton = {
  label: string;
  href: string;
};

type LinkButtonGroupProps = {
  links: LinkButton[];
};

export function LinkButtonGroup({ links }: LinkButtonGroupProps) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => (
        <Link
          key={`${link.href}-${link.label}`}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
          className={
            index === 0
              ? "rounded-full bg-violet-400/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-violet-300"
              : "rounded-full border border-violet-300/40 bg-white/5 px-4 py-2 text-sm text-violet-100 transition hover:bg-white/10"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
