// components/UnitSchedule.tsx
import type { UnitDetail } from "@/data/units";
import type { GymSchedule, DayKey } from "@/data/schedule";
import { SCHEDULES_BY_UNIT } from "@/data/schedule";
import { normalizeLabel, normalizeTime } from "@/lib/schedule";

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
      label: normalizeLabel(s.title), // ← padroniza rótulos
      time: normalizeTime(s.time),    // ← padroniza horários
    }))
  );
}

export default function UnitSchedule({ unit }: { unit: UnitDetail }) {
  const schedule = SCHEDULES_BY_UNIT[unit.slug] ?? null;
  if (!schedule) return null;

  const rows = toRows(schedule);

  return (
    <section id="horarios" className="container py-12">
      <h2 className="h2">Horários</h2>

      {/* legenda opcional para educar usuário e time */}
      <p className="p mt-2 text-white/70">
        <b>No-Gi (sem kimono)</b> = treino sem kimono •{" "}
        <b>Jiu-Jitsu (com kimono)</b> = treino tradicional
      </p>

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
