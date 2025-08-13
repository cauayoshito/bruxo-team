// components/UnitSchedule.tsx
import type { UnitDetail } from "@/data/units";
import type { GymSchedule, DayKey } from "@/data/schedule";
import { SCHEDULES_BY_UNIT } from "@/data/schedule";

const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

function toRows(schedule: GymSchedule) {
  return (Object.keys(schedule) as DayKey[]).flatMap((day) =>
    schedule[day].map((s) => ({
      day,
      label: s.title,
      time: s.time,
    }))
  );
}

export default function UnitSchedule({ unit }: { unit: UnitDetail }) {
  // pega o quadro certo pela URL (stella | stiep | itapua)
  const schedule = SCHEDULES_BY_UNIT[unit.slug] ?? null;
  if (!schedule) return null;

  const rows = toRows(schedule);

  return (
    <section id="horarios" className="container py-12">
      <h2 className="h2">Horários</h2>
      <div className="mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm table-auto">
          <thead className="text-white/80">
            <tr className="text-left [&>th]:py-3 [&>th]:pr-4">
              <th>Dia</th>
              <th>Turma</th>
              <th className="pr-0">Horário</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((r, i) => (
              <tr key={i} className="[&>td]:py-3 [&>td]:pr-4">
                <td className="font-medium">{DAY_LABEL[r.day as DayKey]}</td>
                <td>{r.label}</td>
                <td className="pr-0">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
