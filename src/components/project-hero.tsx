import Image from "next/image";

import type { Project } from "@/content/projects";

import { LinkButtonGroup } from "@/components/link-button-group";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="space-y-6 rounded-3xl border border-white/10 bg-[#140b25] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
        {project.eyebrow ?? project.tone}
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-white sm:text-5xl">{project.title}</h1>
      <p className="max-w-3xl text-lg leading-8 text-zinc-200">{project.subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={`${project.slug}-${tag}`}
            className="rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.metrics?.length ? (
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div
              key={`${project.slug}-${metric.label}`}
              className="rounded-xl border border-violet-300/15 bg-black/20 p-4"
            >
              <dt className="text-sm leading-5 text-zinc-400">{metric.label}</dt>
              <dd className="mt-1 font-serif text-3xl text-violet-200">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <LinkButtonGroup links={project.links ?? []} />
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={project.heroImage}
          alt={`${project.title} hero`}
          fill
          className="object-cover"
          sizes="(max-width: 1152px) 100vw, 1088px"
        />
      </div>
    </section>
  );
}
