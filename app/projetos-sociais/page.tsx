// app/projetos-sociais/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos Sociais — Bruxo Team",
  description: "Conheça os projetos sociais vinculados à Bruxo Team.",
};

export default function ProjectsIndex() {
  return (
    <main className="container py-12">
      <h1 className="h1 mb-6">Projetos Sociais</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="card p-5">
            <h2 className="h3">{p.name}</h2>
            {p.location && <p className="p mt-2">{p.location}</p>}
            {p.description && <p className="p mt-3">{p.description}</p>}
            <Link href={`/projetos-sociais/${p.slug}`} className="btn-secondary mt-4 inline-block">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
