import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const toneClass =
    project.tone === "technical"
      ? "from-violet-950/30 to-violet-900/10"
      : "from-violet-900/20 to-fuchsia-900/10";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#120a22] transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/30">
      <div className={`relative aspect-[16/10] w-full bg-gradient-to-br ${toneClass}`}>
        <Image
          src={project.heroImage}
          alt={`${project.title} preview`}
          fill
          className="object-cover opacity-90 transition duration-300 group-hover:scale-[1.01]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-5">
        <h3 className="font-serif text-xl tracking-tight text-white">{project.title}</h3>
        <p className="text-sm leading-6 text-zinc-300/95">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((item) => (
            <span
              key={`${project.slug}-${item}`}
              className="rounded-full border border-violet-200/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200"
            >
              {item}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-auto inline-block pt-1 text-sm font-medium text-violet-200 underline decoration-violet-400/50 underline-offset-4 hover:text-violet-100"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}
