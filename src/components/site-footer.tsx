import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js, TypeScript, Tailwind, and MDX.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-zinc-100">
            Email
          </Link>
          <Link href={siteConfig.linkedin} className="hover:text-zinc-100" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={siteConfig.github} className="hover:text-zinc-100" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={siteConfig.substack} className="hover:text-zinc-100" target="_blank" rel="noreferrer">
            Substack
          </Link>
        </div>
      </div>
    </footer>
  );
}
