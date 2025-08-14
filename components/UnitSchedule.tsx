// components/UnitSchedule.tsx
import {
  SCHEDULES_BY_UNIT,
  type DayKey,
  type GymSchedule,
} from "@/data/schedule";
import type { UnitDetail } from "@/data/units";

// ❌ REMOVIDO: import { normalizeLabel, normalizeTime } from "@/lib/schedule";

const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

const ORDERED_DAYS: DayKey[] = ["seg", "ter", "qua", "qui", "sex", "sab"];

function hasAnySession(schedule: GymSchedule): boolean {
  return Object.values(schedule).some((arr) => arr && arr.length > 0);
}

export default function UnitSchedule({ unit }: { unit: UnitDetail }) {
  const schedule = SCHEDULES_BY_UNIT[unit.slug];

  if (!schedule || !hasAnySession(schedule)) return null;

  return (
    <section className="container py-12">
      <h2 className="h2">Horários</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-[640px] text-sm">
          <thead>
            <tr className="[&>th]:text-left [&>th]:pr-6 [&>th]:py-2">
              <th>Dia</th>
              <th>Turma</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody className="[&>tr>td]:py-2 [&>tr>td]:pr-6">
            {ORDERED_DAYS.flatMap((day) => {
              const rows = schedule[day] ?? [];
              return rows.map((s, idx) => (
                <tr key={`${day}-${idx}`}>
                  <td>{DAY_LABEL[day]}</td>
                  {/* ✅ usa exatamente o título do arquivo */}
                  <td>{s.title}</td>
                  {/* ✅ usa exatamente o horário do arquivo */}
                  <td className="tabular-nums">{s.time}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
