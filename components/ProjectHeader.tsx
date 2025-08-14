// components/ProjectHeader.tsx
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectHeader({ project }: { project: Project }) {
  const wa = project.whatsapp ? `https://wa.me/${project.whatsapp}` : null;

  return (
    <section className="container py-16 section">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Texto */}
        <div className="md:col-span-7">
          <h1 className="h1">{project.name}</h1>
          {project.location && (
            <p className="p mt-2 opacity-80">{project.location}</p>
          )}
          {project.address && <p className="p mt-2 opacity-80">{project.address}</p>}
          <p className="p mt-4">{project.description}</p>

          <div className="mt-6 flex gap-3">
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Falar no WhatsApp
              </a>
            )}
            <a href="/projetos-sociais" className="btn-secondary">
              Voltar
            </a>
          </div>
        </div>

        {/* Mídia / Mapa */}
        <div className="md:col-span-5">
          <div className="card overflow-hidden">
            {project.heroImage ? (
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.heroImage}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] bg-white/5" />
            )}
          </div>

          {project.mapQuery && (
            <div className="card mt-4 overflow-hidden">
              <iframe
                className="w-full h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  project.mapQuery
                )}&output=embed`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
