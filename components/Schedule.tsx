"use client";
import { Unit } from "@/data/units";
import { useState } from "react";
import clsx from "clsx";

export default function Schedule({ units }: { units: Unit[] }) {
  // usa 'id' (stiep | itapua | stella), não 'slug'
  const [active, setActive] = useState(units[0].id);
  const current = units.find((u) => u.id === active)!;

  // se ainda não preencheu os horários no data, não quebra build
  const rows = current.schedule ?? [];

  return (
    <section id="horarios" className="container py-16 section">
      <h2 className="h2">Horários de Treino</h2>

      <div className="mt-6 flex gap-2 flex-wrap">
        {units.map((u) => (
          <button
            key={u.id}
            onClick={() => setActive(u.id)}
            className={clsx(
              "btn",
              active === u.id ? "btn-primary" : "btn-outline"
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
                  <td className="px-3 py-3">{s.day}</td>
                  <td className="px-3 py-3">{s.group}</td>
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
