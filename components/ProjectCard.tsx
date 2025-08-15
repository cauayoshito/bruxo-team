"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  image?: string;
  whatsapp?: string;
  instagram?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  // Usa UrlObject por causa do typedRoutes
  const href = {
    pathname: "/projetos-sociais/[slug]" as const,
    query: { slug: project.slug },
  };

  return (
    <div className="rounded-2xl bg-neutral-900 p-5 shadow-lg flex flex-col">
      {/* BLOCO CLICÁVEL */}
      <Link href={href} className="group block">
        {project.image && (
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <h3 className="text-lg font-bold group-hover:underline">{project.name}</h3>
        {project.subtitle && <p className="text-sm text-white/70">{project.subtitle}</p>}
        {project.description && <p className="text-sm text-white/70 mt-1">{project.description}</p>}
      </Link>

      {/* AÇÕES */}
      <div className="mt-4 flex items-center justify-between">
        {project.whatsapp && (
          <Link
            href={`https://wa.me/${String(project.whatsapp).replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-red-600 hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500/60"
          >
            WhatsApp
          </Link>
        )}

        {project.instagram && (
          <a
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${project.name}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
            title="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}
