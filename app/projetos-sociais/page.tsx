import Link from "next/link";
import type { Route } from "next";
import { projects } from "@/data/projects";

export default function ProjetosSociaisPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Projetos Sociais</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="bg-white rounded-lg shadow p-6 flex flex-col"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded"
              />
            )}

            <h2 className="text-2xl font-semibold mt-4">{p.title}</h2>

            {p.location && (
              <p className="p mt-2 text-gray-600">{p.location}</p>
            )}

            {p.description && (
              <p className="p mt-3 text-gray-700">{p.description}</p>
            )}

            <Link
              href={`/projetos-sociais/${p.slug}` as Route}
              className="btn-secondary mt-4 inline-block text-center"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
