import Image from "next/image";
import Link from "next/link";

import { FeaturedProjectGrid } from "@/components/featured-project-grid";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="space-y-14 sm:space-y-16">
      <section className="fade-in rounded-3xl border border-white/10 bg-[#120a22]/80 p-7 sm:p-10">
        <h1 className="font-serif text-5xl tracking-tight text-white sm:text-7xl">{siteConfig.name}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">{siteConfig.tagline}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-violet-300 px-5 py-2.5 text-sm font-semibold text-black hover:bg-violet-200"
          >
            View Work
          </Link>
          <Link
            href="/resume"
            className="rounded-full border border-violet-300/40 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-100 hover:bg-violet-500/20"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-violet-300/40 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-100 hover:bg-violet-500/20"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#120d21]/90 p-6 text-center">
          <Image
            src="/images/logos/columbia.png"
            alt="Columbia logo"
            width={48}
            height={48}
            className="mb-3 h-11 w-auto object-contain opacity-85 [filter:brightness(1.08)]"
          />
          <h3 className="font-serif text-2xl tracking-tight text-zinc-100">Columbia University</h3>
          <p className="mt-1.5 text-sm text-zinc-400/90">MS in Data Science</p>
        </article>

        <article className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#120d21]/90 p-6 text-center">
          <Image
            src="/images/logos/bain.png"
            alt="Bain logo"
            width={48}
            height={48}
            className="mb-3 h-11 w-auto object-contain opacity-85 [filter:brightness(1.08)]"
          />
          <h3 className="font-serif text-2xl tracking-tight text-zinc-100">Bain &amp; Company</h3>
          <p className="mt-1.5 text-sm text-zinc-400/90">Former Analyst Intern, Private Equity</p>
        </article>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured project case studies"
          description="Early Warning Risk Detection, Agentic Procurement System, Geospatial Intelligence Dashboard, and ETF Portfolio Analytics."
        />
        <FeaturedProjectGrid projects={featured} />
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <h2 className="font-serif text-2xl text-white">Writing</h2>
        <p className="mt-2 text-zinc-300">I write about data, product, and decision systems.</p>
        <Link href="/blog" className="mt-4 inline-block text-violet-200 underline underline-offset-4 hover:text-violet-100">
          Browse posts
        </Link>
      </section>
    </div>
  );
}
