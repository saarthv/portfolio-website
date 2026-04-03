import type { Project } from "@/content/projects";

type ProjectSectionsProps = {
  project: Project;
};

export function ProjectSections({ project }: ProjectSectionsProps) {
  return (
    <div className="space-y-6">
      {project.sections.map((section) => (
        <section key={`${project.slug}-${section.title}`} className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <h2 className="font-serif text-2xl tracking-tight text-white">{section.title}</h2>
          <div className="mt-4 space-y-4 text-zinc-300">
            {section.paragraphs.map((paragraph, idx) => (
              <p key={`${section.title}-p-${idx}`}>{paragraph}</p>
            ))}
            {section.bullets?.length ? (
              <ul className="list-disc space-y-2 pl-6">
                {section.bullets.map((bullet, idx) => (
                  <li key={`${section.title}-b-${idx}`}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
