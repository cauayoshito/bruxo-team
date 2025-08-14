// app/projetos-sociais/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos Sociais — Bruxo Team",
  description:
    "Conheça os projetos sociais vinculados à Bruxo Team. Cada projeto tem sua própria página com grade, localização e galeria.",
  openGraph: {
    title: "Projetos Sociais — Bruxo Team",
    description:
      "Listagem de iniciativas sociais com detalhes de horários e locais.",
    type: "website",
  },
};

export default function ProjetosSociaisPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Projetos Sociais</h1>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        Iniciativas comunitárias apoiadas pela Bruxo Team. Acesse a página de
        cada projeto para ver a grade completa, a localização e como participar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="border rounded-2xl p-5">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            {p.location && (
              <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
            )}
            {p.description && (
              <p className="text-sm leading-relaxed mt-3">{p.description}</p>
            )}

            <div className="mt-4">
              <Link
                href={{ pathname: `/projetos-sociais/${p.slug}` }}
                className="inline-flex items-center px-4 py-2 rounded-xl border hover:underline"
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
