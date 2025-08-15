// app/projetos-sociais/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS,
  PROJECTS_INDEX,
  type ProjectSlug,
  type ProjectDetail,
} from "@/data/projects";

import ProjectHeader from "@/components/ProjectHeader";
import ProjectGallery from "@/components/ProjectGallery";

type Props = { params: { slug: ProjectSlug } };

// Evita gerar rotas dinâmicas fora da lista
export const dynamicParams = false;

// Gera rotas estáticas para cada projeto
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// SEO por projeto
export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS_INDEX[params.slug];
  if (!project) {
    return { title: "Bruxo Team", description: "Projeto não encontrado." };
  }

  const title = project.seo?.title ?? `${project.name} — Bruxo Team`;
  const description = project.seo?.description ?? `Página do projeto ${project.name}.`;
  const images = project.heroImage ? [project.heroImage] : [];

  return {
    title,
    description,
    openGraph: { title, description, images, type: "website" },
  };
}

export default function ProjectPage({ params }: Props) {
  const project: ProjectDetail | undefined = PROJECTS_INDEX[params.slug];
  if (!project) return notFound();

  const whatsappLink = project.whatsapp
    ? `https://wa.me/${project.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        `Olá! Quero informações sobre o projeto ${project.name}.`
      )}`
    : null;

  const mapsLink =
    project.mapQuery && project.mapQuery.trim()
      ? `https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}`
      : null;

  return (
    <main>
      {/* Hero / capa do projeto */}
      <ProjectHeader project={project} />

      {/* Contatos (WhatsApp / Instagram) */}
      {(project.whatsapp || project.instagram) && (
        <section className="container pt-6">
          <div className="flex flex-wrap gap-3">
            {whatsappLink && (
              <a
                className="btn-primary"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            )}
            {project.instagram && (
              <a
                className="btn-secondary"
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}
          </div>
        </section>
      )}

      {/* Galeria do projeto */}
      <ProjectGallery images={project.gallery ?? []} />

      {/* Endereço e mapa */}
      {(project.address || project.mapQuery) && (
        <section className="container py-12">
          <h2 className="h2">Endereço</h2>
          {project.address && <p className="p mt-2">{project.address}</p>}
          {mapsLink && (
            <div className="mt-4">
              <iframe
                className="w-full h-64 rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`${mapsLink}&output=embed`}
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}
