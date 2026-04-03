import Image from "next/image";

import type { Project } from "@/content/projects";

import { ProjectHero } from "@/components/project-hero";
import { ProjectSections } from "@/components/project-sections";
import { TableauEmbed } from "@/components/tableau-embed";

type ProjectPageTemplateProps = {
  project: Project;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const tableauLink = project.links?.find((link) => link.label.toLowerCase() === "tableau");

  return (
    <div className="space-y-8">
      <ProjectHero project={project} />

      {project.supportingImages?.length ? (
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-white">Visuals</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.supportingImages.map((imagePath) => (
              <div key={imagePath} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
                <Image src={imagePath} alt={`${project.title} supporting visual`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <ProjectSections project={project} />

      {tableauLink ? (
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-white">Interactive Tableau</h2>
          <p className="text-zinc-300">
            Explore the live dashboard directly. If the embed does not load, use the Tableau link in the project actions.
          </p>
          <TableauEmbed src={tableauLink.href} title={`${project.title} Tableau`} />
        </section>
      ) : null}

      {project.links?.length ? (
        <section className="rounded-2xl border border-white/10 bg-[#130c24] p-6">
          <h2 className="font-serif text-2xl text-white">Related links</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            {project.links.map((link) => (
              <li key={`${project.slug}-${link.label}`}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="underline decoration-violet-400/50 underline-offset-4 hover:text-violet-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
