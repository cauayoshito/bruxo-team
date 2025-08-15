// components/ProjectHeader.tsx
import Image from "next/image";
import type { ProjectDetail } from "@/data/projects";

export default function ProjectHeader({ project }: { project: ProjectDetail }) {
  const wa = project.whatsapp
    ? `https://wa.me/${project.whatsapp}`
    : null;

  const ig = project.instagram ?? null;

  return (
    <section className="container py-10 grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.name}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-sm opacity-70">
              Sem imagem
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-7">
        <h1 className="h1">{project.name}</h1>
        {project.description && <p className="p mt-3">{project.description}</p>}

        {(wa || ig) && (
          <div className="mt-6 flex gap-3 flex-wrap">
            {wa && (
              <a
                className="btn-primary"
                href={`${wa}?text=${encodeURIComponent(
                  `Olá! Quero informações sobre o projeto ${project.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            )}
            {ig && (
              <a
                className="btn-secondary"
                href={ig}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
