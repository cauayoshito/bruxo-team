// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = (`/projetos-sociais/${project.slug}` as Route);

  return (
    <Link
      href={href}
      className="card overflow-hidden flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      aria-label={`Abrir ${project.name}`}
    >
      {/* imagem topo */}
      <div className="relative w-full aspect-[16/10] bg-white/5">
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority={false}
          />
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="h3 group-hover:underline">{project.name}</h3>
        {project.location && (
          <p className="p opacity-80">{project.location}</p>
        )}
        <p className="p mt-2">{project.description}</p>

        {/* rótulo visual; pointer-events-none para não “roubar” o clique do Link */}
        <span className="btn-secondary mt-4 inline-flex pointer-events-none">
          Ver detalhes
        </span>
      </div>
    </Link>
  );
}
