// app/projetos-sociais/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PROJECTS_INDEX } from "@/data/projects";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectGallery from "@/components/ProjectGallery";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const p = PROJECTS_INDEX[params.slug?.toLowerCase()];
  if (!p) return { title: "Projeto não encontrado — Bruxo Team" };
  return {
    title: `${p.name} — Projetos Sociais | Bruxo Team`,
    description: p.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project =
    PROJECTS_INDEX[params.slug?.toLowerCase()] ?? PROJECTS_INDEX[params.slug];

  if (!project) return notFound();

  return (
    <main>
      <ProjectHeader project={project} />
      <ProjectGallery images={project.gallery} />
    </main>
  );
}
