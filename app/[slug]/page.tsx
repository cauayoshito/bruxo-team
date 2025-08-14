// app/projetos-sociais/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, PROJECTS_INDEX, type Project } from "@/data/projects";
import type { DayKey } from "@/data/schedule";
import { normalizeLabel, normalizeTime } from "@/lib/schedule";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = PROJECTS_INDEX[params.slug];
  if (!p) return { title: "Projeto — Bruxo Team", description: "Projeto não encontrado." };
  return {
    title: `${p.name} — Projetos Sociais`,
    description: p.description ?? `Página do projeto ${p.name}.`,
  };
}

const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg", ter: "Ter", qua: "Qua", qui: "Qui", sex: "Sex", sab: "Sáb",
};

export default function ProjectPage({ params }: Props) {
  const project: Project | undefined = PROJECTS_INDEX[params.slug];
  if (!project) return notFound();

  const days: DayKey[] = ["seg", "ter", "qua", "qui", "sex", "sab"];

  return (
    <main className="container py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="h1">{project.name}</h1>
          {project.location && <p className="p mt-1">{project.location}</p>}
        </div>
        <Link href="/projetos-sociais" className="text-sm underline">← Voltar</Link>
      </div>

      {project.description && <p className="p mt-6 max-w-2xl">{project.description}</p>}

      <section className="mt-8">
        <h2 className="h2 mb-2">Grade de treinos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] text-sm">
            <thead>
              <tr className="[&>th]:text-left [&>th]:pr-6 [&>th]:py-2">
                <th>Dia</th><th>Turma</th><th>Horário</th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:py-2 [&>tr>td]:pr-6">
              {days.flatMap((d) =>
                (project.schedule[d] ?? []).map((s, i) => (
                  <tr key={`${d}-${i}`}>
                    <td>{DAY_LABEL[d]}</td>
                    <td>{normalizeLabel(s.title)}</td>
                    <td>{normalizeTime(s.time)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <a
          href="https://wa.me/5571XXXXXXXXX?text=Quero%20saber%20mais%20sobre%20os%20projetos%20sociais"
          className="btn-primary inline-flex"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
