// app/projetos-sociais/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, PROJECTS_INDEX } from "@/data/projects";
import { normalizeLabel, normalizeTime } from "@/lib/schedule";
import type { DayKey } from "@/data/schedule";

type Props = { params: { slug: string } };

// Gera as páginas para cada projeto na build
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
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
  const project = PROJECTS_INDEX[params.slug];
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

      {project.description && <p className="mt-6 max-w-2xl">{project.description}</p>}

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Grade de treinos</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[600px] text-sm">
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
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <a
          href="https://wa.me/5571XXXXXXXXX?text=Quero%20saber%20mais%20sobre%20os%20projetos%20sociais%20da%20Bruxo%20Team"
          className="inline-flex items-center px-4 py-2 rounded-xl border"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
