import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ProjectPage } from "@/components/sections/ProjectPage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(idx + 1) % projects.length];
  return <ProjectPage project={project} nextProject={nextProject} />;
}
