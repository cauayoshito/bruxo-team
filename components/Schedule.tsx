"use client";
import { UnitDetail } from "@/data/units";
import { useState } from "react";
import clsx from "clsx";

const DAY_LABEL: Record<string, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

export default function Schedule({ units }: { units: UnitDetail[] }) {
  // usa 'slug' (stiep | itapua | stella)
  const [active, setActive] = useState<UnitDetail["slug"]>(units[0].slug);
  const current = units.find((u) => u.slug === active)!;

  // tolerante: se ainda não tiver horários preenchidos, não quebra
  const rows = current.schedule ?? [];

  return (
    <section id="horarios" className="container py-16 section">
      <h2 className="h2">Horários de Treino</h2>

      <div className="mt-6 flex gap-2 flex-wrap">
        {units.map((u) => (
          <button
            key={u.slug}
            onClick={() => setActive(u.slug)}
            className={clsx(
              "btn",
              active === u.slug ? "btn-primary" : "btn-outline"
            )}
          >
            {u.name}
          </button>
        ))}
      </div>

      {rows.length > 0 ? (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-[480px] w-full text-left border-separate border-spacing-y-2">
            <thead className="text-white/60">
              <tr>
                <th className="px-3 py-2">Dia</th>
                <th className="px-3 py-2">Turma</th>
                <th className="px-3 py-2">Horário</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s, i) => (
                <tr key={i} className="card">
                  <td className="px-3 py-3">{DAY_LABEL[s.day] ?? s.day}</td>
                  <td className="px-3 py-3">{s.label}</td>
                  <td className="px-3 py-3">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="p mt-6">
          Horários em atualização. Fale conosco no WhatsApp da unidade para
          saber os horários de hoje.
        </p>
      )}
    </section>
  );
}
