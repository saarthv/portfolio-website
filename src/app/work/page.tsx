import { FeaturedProjectGrid } from "@/components/featured-project-grid";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const additional = getAllProjects().filter((project) => !project.featured);

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Work"
        title="A selection of projects spanning data science, AI systems, and product analytics."
      />

      <section className="space-y-5">
        <h2 className="font-serif text-2xl text-white">Featured</h2>
        <FeaturedProjectGrid projects={featured} />
      </section>

      <section className="space-y-5">
        <h2 className="font-serif text-2xl text-white">Additional</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {additional.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
