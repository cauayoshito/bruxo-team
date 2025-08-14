// app/projetos-sociais/page.tsx
import Link from "next/link";
import type { Route } from "next";
import { PROJECTS } from "@/data/projects";

export default function ProjetosSociaisPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projetos Sociais</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="card p-5">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            {p.location && <p className="p mt-2">{p.location}</p>}
            {p.description && <p className="p mt-3">{p.description}</p>}

            <Link
              href={`/projetos-sociais/${p.slug}` as Route}
              className="btn-secondary mt-4 inline-block"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
