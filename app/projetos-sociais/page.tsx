// app/projetos-sociais/page.tsx
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function ProjetosSociaisPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projetos Sociais</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="border rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            {p.location && <p className="text-sm text-muted-foreground mt-1">{p.location}</p>}
            {p.description && <p className="mt-3 text-sm leading-relaxed">{p.description}</p>}
            <div className="mt-4">
              <Link
                href={`/projetos-sociais/${p.slug}`}
                className="inline-flex items-center px-4 py-2 rounded-xl border"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
