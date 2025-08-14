// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = (`/projetos-sociais/${project.slug}` as Route);

  return (
    <div className="card overflow-hidden flex flex-col">
      {/* imagem topo, igual UnitCard */}
      <div className="relative w-full aspect-[16/10] bg-white/5">
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="h3">{project.name}</h3>
        <p className="p opacity-80">{project.location}</p>
        <p className="p mt-2">{project.description}</p>

        <Link href={href} className="btn-secondary mt-4 inline-flex">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
