import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS,
  PROJECTS_INDEX,
  type ProjectSlug,
  type ProjectDetail,
} from "@/data/projects";

type Props = { params: { slug: ProjectSlug } };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS_INDEX[params.slug];
  if (!project) return { title: "Bruxo Team", description: "Projeto não encontrado." };
  const title = project.seo?.title ?? `${project.name} — Bruxo Team`;
  const description = project.seo?.description ?? `Página do projeto ${project.name}.`;
  const images = project.heroImage ? [project.heroImage] : [];
  return { title, description, openGraph: { title, description, images, type: "website" } };
}

export default function ProjectPage({ params }: Props) {
  const project: ProjectDetail | undefined = PROJECTS_INDEX[params.slug];
  if (!project) return notFound();

  const whatsappLink = project.whatsapp
    ? `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(
        `Olá! Quero informações sobre o projeto ${project.name}.`
      )}`
    : null;

  const mapsLink =
    project.mapQuery && project.mapQuery.trim()
      ? `https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}`
      : null;

  return (
    <main>
      {/* Header simples */}
      <section className="container py-10 grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5">
            {project.heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-sm opacity-70">Sem imagem</div>
            )}
          </div>
        </div>

        <div className="md:col-span-7">
          <h1 className="h1">{project.name}</h1>
          {project.description && <p className="p mt-3">{project.description}</p>}
          {project.address && <p className="p mt-2 opacity-80">{project.address}</p>}

          {(project.whatsapp || project.instagram) && (
            <div className="mt-6 flex gap-3 flex-wrap">
              {whatsappLink && (
                <a className="btn-primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              )}
              {project.instagram && (
                <a className="btn-secondary" href={project.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              )}
              {mapsLink && (
                <a className="btn-secondary" href={mapsLink} target="_blank" rel="noopener noreferrer">
                  Ver no mapa
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Galeria simples */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="container pb-16">
          <h2 className="h2">Galeria</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((g, idx) => (
              <div key={g.src + idx} className="relative w-full overflow-hidden rounded-xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt || `Imagem ${idx + 1} do ${project.name}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
