import { notFound } from "next/navigation";

import { ProjectPageTemplate } from "@/components/project-page-template";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageTemplate project={project} />;
}
