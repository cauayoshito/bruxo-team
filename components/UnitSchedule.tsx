// components/UnitSchedule.tsx
"use client";

import type { UnitDetail } from "@/data/units";
import { SCHEDULES_BY_UNIT } from "@/data/schedule";
import {
  toOrderedTable,
  DAY_LABEL,
  getNextClasses,
  formatRowHuman,
} from "@/lib/schedule";

export default function UnitSchedule({ unit }: { unit: UnitDetail }) {
  const schedule = SCHEDULES_BY_UNIT[unit.slug] ?? null;
  if (!schedule) return null;

  const table = toOrderedTable(schedule);
  const next = getNextClasses(schedule, 3); // opcional: próximas 3

  return (
    <section className="space-y-8">
      {/* Cabeçalho da unidade (endereço/contato, se houver) */}
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">{unit.name}</h2>
        {(unit.street || unit.whatsapp || unit.instagram) && (
          <div className="text-sm text-muted-foreground space-x-3">
            {unit.street && <span>{unit.street}</span>}
            {unit.whatsapp && <span>• WhatsApp: {unit.whatsapp}</span>}
            {unit.instagram && <span>• Instagram: {unit.instagram}</span>}
          </div>
        )}
      </header>

      {/* Próximas aulas (remova se não quiser) */}
      {next.length > 0 && (
        <div className="rounded-xl border p-4">
          <h3 className="font-medium mb-2">Próximas aulas</h3>
          <ul className="text-sm space-y-1">
            {next.map((n, i) => (
              <li key={i} className="opacity-90">
                {formatRowHuman(n)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tabela por dia */}
      <div className="grid md:grid-cols-3 gap-6">
        {(Object.keys(table) as (keyof typeof table)[]).map((day) => {
          const rows = table[day];
          if (!rows || rows.length === 0) {
            return (
              <div
                key={day}
                className="rounded-xl border p-4 opacity-70"
              >
                <h3 className="font-medium mb-3">{DAY_LABEL[day]}</h3>
                <p className="text-sm text-muted-foreground">Sem aulas</p>
              </div>
            );
          }

          return (
            <div key={day} className="rounded-xl border p-4">
              <h3 className="font-medium mb-3">{DAY_LABEL[day]}</h3>
              <ul className="space-y-2">
                {rows.map((r, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{r.label}</span>
                    <span className="tabular-nums opacity-80">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
