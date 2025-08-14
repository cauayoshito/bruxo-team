// app/projetos-sociais/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PROJECTS, PROJECTS_INDEX, type Project } from "@/data/projects";
import type { DayKey } from "@/data/schedule";
import { normalizeLabel, normalizeTime } from "@/lib/schedule";

type Props = { params: { slug: string } };

export const dynamicParams = false;

// gera as rotas estáticas /projetos-sociais/[slug]
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// SEO por projeto
export function generateMetadata({ params }: Props): Metadata {
  const p = PROJECTS_INDEX[params.slug];
  if (!p) return { title: "Projeto — Bruxo Team", description: "Projeto não encontrado." };
  const title = `${p.name} — Projetos Sociais`;
  const description = p.description ?? `Página do projeto ${p.name}.`;
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

export default function ProjectPage({ params }: Props) {
  const project: Project | undefined = PROJECTS_INDEX[params.slug];
  if (!project) return notFound();

  const days: DayKey[] = ["seg", "ter", "qua", "qui", "sex", "sab"];

  return (
    <main className="container py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{project.name}</h1>
          {project.location && (
            <p className="text-muted-foreground mt-1">{project.location}</p>
          )}
        </div>
        <Link href="/projetos-sociais" className="text-sm underline">
          ← Voltar
        </Link>
      </div>

      {project.description && (
        <p className="mt-6 max-w-2xl leading-relaxed">{project.description}</p>
      )}

      {/* Grade */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Grade de treinos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[640px] text-sm">
            <thead>
              <tr className="[&>th]:text-left [&>th]:pr-6 [&>th]:py-2">
                <th>Dia</th>
                <th>Turma</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:py-2 [&>tr>td]:pr-6">
              {days.flatMap((d) =>
                (project.schedule[d] ?? []).map((s, idx) => (
                  <tr key={`${d}-${idx}`}>
                    <td>{DAY_LABEL[d]}</td>
                    <td>{normalizeLabel(s.title)}</td>
                    <td>{normalizeTime(s.time)}</td>
                  </tr>
                ))
              )}
              {/* se não houver nenhuma linha, mostra um aviso */}
              {days.every((d) => !project.schedule[d]?.length) && (
                <tr>
                  <td colSpan={3} className="py-4 text-muted-foreground">
                    Horários serão divulgados em breve.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Galeria simples (opcional) */}
      {!!project.gallery?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Galeria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
                {/* Se já usar <Image />, troque por ele e ajuste width/height */}
                <img
                  src={img.src}
                  alt={img.alt ?? `${project.name} foto ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-10">
        <a
          href={`https://wa.me/5571XXXXXXXXX?text=${encodeURIComponent(
            `Quero saber mais sobre o projeto ${project.name}.`
          )}`}
          className="inline-flex items-center px-4 py-2 rounded-xl border"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
