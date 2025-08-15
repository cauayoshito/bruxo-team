// components/ProjectCard.tsx
"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export type Project = {
  name: string;
  subtitle?: string;        // ex.: "Itapuã, Salvador – BA"
  description?: string;     // opcional
  image?: string;           // /images/...
  whatsapp?: string;        // "5571..."
  instagram?: string;       // "https://instagram.com/..."
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-5 shadow-lg flex flex-col">
      {/* Imagem */}
      {project.image && (
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Título / Sub */}
      <h3 className="text-lg font-bold">{project.name}</h3>
      {project.subtitle && (
        <p className="text-sm text-white/70">{project.subtitle}</p>
      )}
      {project.description && (
        <p className="text-sm text-white/70 mt-1">{project.description}</p>
      )}

      {/* Ações (igual UnitCard) */}
      <div className="mt-4 flex items-center justify-between">
        {project.whatsapp && (
          <Link
            href={`https://wa.me/${project.whatsapp}`}
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
