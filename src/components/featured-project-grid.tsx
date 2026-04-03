import type { Project } from "@/content/projects";

import { ProjectCard } from "@/components/project-card";

type FeaturedProjectGridProps = {
  projects: Project[];
};

export function FeaturedProjectGrid({ projects }: FeaturedProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
