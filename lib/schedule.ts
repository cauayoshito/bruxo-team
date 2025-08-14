// lib/schedule.ts
// --------------------------------------
// Utilidades para lidar com horários/aulas
// --------------------------------------

import type { DayKey, ClassLabel, ScheduleRow } from "@/data/units";

// Caso não exista ainda em "@/data/schedule", você pode reutilizar estes tipos:
export type GymSlot = {
  title: ClassLabel;
  /** "HH:MM" ou "HH:MM–HH:MM" (aceita hífen normal "-" ou travessão "–" / "—") */
  time: string;
};

export type GymSchedule = Record<DayKey, GymSlot[]>;

// Ordem e rótulos (usar no sort/labels)
export const DAY_ORDER: DayKey[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
export const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

// --------------------------------------
// Parsing e Normalização de horários
// --------------------------------------

const RANGE_SEPARATORS = ["–", "—", "-"]; // en-dash, em-dash, hyphen

export type TimeRange = {
  startMins: number; // minutos desde 00:00
  endMins: number;   // minutos desde 00:00 (se passar da meia-noite, pode ser > 1440)
  durationMins: number;
};

export function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

/** "HH:MM" -> minutos desde 00:00. Retorna NaN se inválido. */
export function parseTimeToMinutes(t: string): number {
  const m = t.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return NaN;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return NaN;
  return hh * 60 + mm;
}

/** Converte minutos (0..?) para "HH:MM" no relógio de 24h (>=1440 rola para o dia seguinte) */
export function minutesToHHMM(mins: number): string {
  const m = ((mins % 1440) + 1440) % 1440; // normaliza
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  return `${pad2(hh)}:${pad2(mm)}`;
}

/** Normaliza uma string de horário em intervalo. Suporta:
 *  - "HH:MM"
 *  - "HH:MM–HH:MM" (ou "-" / "—")
 *  Se end < start, assume que cruza a meia-noite (soma 24h).
 */
export function normalizeTimeRange(raw: string): TimeRange | null {
  const sep = RANGE_SEPARATORS.find((s) => raw.includes(s));
  if (!sep) {
    const start = parseTimeToMinutes(raw);
    if (Number.isNaN(start)) return null;
    const end = start + 60; // assume 1h se não tiver fim
    return {
      startMins: start,
      endMins: end,
      durationMins: end - start,
    };
  }
  const [lhs, rhs] = raw.split(sep).map((s) => s.trim());
  const start = parseTimeToMinutes(lhs);
  const endRaw = parseTimeToMinutes(rhs);
  if (Number.isNaN(start) || Number.isNaN(endRaw)) return null;
  const end = endRaw < start ? endRaw + 24 * 60 : endRaw;
  return {
    startMins: start,
    endMins: end,
    durationMins: end - start,
  };
}

/** Retorna uma versão “bonita” com travessão sempre "–" */
export function prettyTimeRange(raw: string): string {
  const r = normalizeTimeRange(raw);
  if (!r) return raw.trim();
  const start = minutesToHHMM(r.startMins);
  const end = minutesToHHMM(r.endMins);
  return `${start}–${end}`;
}

// --------------------------------------
// Validação e limpeza
// --------------------------------------

export type RowWithMeta = ScheduleRow & TimeRange;

export function isValidRow(row: ScheduleRow): boolean {
  if (!row?.day || !row?.label || !row?.time) return false;
  if (!DAY_ORDER.includes(row.day)) return false;
  return normalizeTimeRange(row.time) !== null;
}

/** Converte GymSchedule -> ScheduleRow[] (padronizado) */
export function toRows(schedule: GymSchedule): ScheduleRow[] {
  const days = Object.keys(schedule) as DayKey[];
  const rows: ScheduleRow[] = [];
  for (const day of days) {
    for (const slot of schedule[day] || []) {
      rows.push({
        day,
        label: slot.title,
        time: prettyTimeRange(slot.time),
      });
    }
  }
  return rows;
}

/** Enriquecido com start/end/duração (útil para sort/consulta) */
export function materialize(rows: ScheduleRow[]): RowWithMeta[] {
  return rows
    .map((r) => {
      const tr = normalizeTimeRange(r.time);
      if (!tr) return null;
      return { ...r, ...tr };
    })
    .filter(Boolean) as RowWithMeta[];
}

/** Ordena por dia e horário de início */
export function sortRows(rows: ScheduleRow[]): ScheduleRow[] {
  const enriched = materialize(rows).sort((a, b) => {
    const d = DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day);
    if (d !== 0) return d;
    return a.startMins - b.startMins;
  });
  return enriched.map(({ startMins: _a, endMins: _b, durationMins: _c, ...rest }) => rest);
}

/** Agrupa por dia já ordenado por horário */
export function groupByDay(rows: ScheduleRow[]): Record<DayKey, ScheduleRow[]> {
  const out = Object.fromEntries(DAY_ORDER.map((d) => [d, []])) as Record<DayKey, ScheduleRow[]>;
  for (const r of sortRows(rows)) {
    out[r.day].push(r);
  }
  return out;
}

/** Junta dois quadros (concatena e ordena) */
export function mergeSchedules(a: GymSchedule, b: GymSchedule): GymSchedule {
  const merged: GymSchedule = { seg: [], ter: [], qua: [], qui: [], sex: [], sab: [] };
  for (const day of DAY_ORDER) {
    merged[day] = [...(a[day] || []), ...(b[day] || [])].sort((x, y) => {
      const X = normalizeTimeRange(x.time)?.startMins ?? 0;
      const Y = normalizeTimeRange(y.time)?.startMins ?? 0;
      return X - Y;
    });
  }
  return merged;
}

/** Retorna erros de validação amigáveis (para debug em dev) */
export function validateSchedule(schedule: GymSchedule): string[] {
  const errors: string[] = [];
  for (const day of DAY_ORDER) {
    const slots = schedule[day] || [];
    slots.forEach((slot, i) => {
      const tr = normalizeTimeRange(slot.time);
      if (!tr) errors.push(`[${day} #${i + 1}] horário inválido: "${slot.time}"`);
      if (!slot.title) errors.push(`[${day} #${i + 1}] título vazio`);
    });
  }
  return errors;
}

// --------------------------------------
// Consultas de “próximas aulas”
// --------------------------------------

export type NextClass = RowWithMeta & { dayIndex: number; /** minutos a partir de "agora" */ startsInMins: number };

function nowInMinutes(localNow: Date = new Date()): { dayIndex: number; mins: number } {
  const day = (localNow.getDay() + 6) % 7; // 0=Seg, 5=Sáb (Date: 0=Dom)
  const dayIndex = day as number;
  const mins = localNow.getHours() * 60 + localNow.getMinutes();
  return { dayIndex, mins };
}

/** Lista as próximas N aulas a partir de "agora" (considera hoje e próximos dias) */
export function getNextClasses(schedule: GymSchedule, count = 3, localNow: Date = new Date()): NextClass[] {
  const rows = materialize(toRows(schedule));
  const { dayIndex: todayIdx, mins: nowMins } = nowInMinutes(localNow);

  // Gera uma timeline de 7 dias a partir de hoje
  const timeline: NextClass[] = [];
  for (let offset = 0; offset < 7; offset++) {
    const idx = (todayIdx + offset) % DAY_ORDER.length;
    const day = DAY_ORDER[idx];
    const dayRows = rows.filter((r) => r.day === day);

    for (const r of dayRows) {
      // Se for hoje, só aulas que ainda não começaram
      const startsToday = offset === 0 ? r.startMins > nowMins : true;
      if (!startsToday) continue;

      const startsIn = offset * 1440 + (r.startMins - (offset === 0 ? nowMins : 0));
      timeline.push({ ...r, dayIndex: idx, startsInMins: startsIn });
    }
  }

  return timeline.sort((a, b) => a.startsInMins - b.startsInMins).slice(0, count);
}

/** Filtra por tipo de aula (label) */
export function filterByLabel(rows: ScheduleRow[], label: ClassLabel): ScheduleRow[] {
  return rows.filter((r) => r.label === label);
}

/** Converte GymSchedule -> tabela já ordenada (para UI) */
export function toOrderedTable(schedule: GymSchedule): Record<DayKey, ScheduleRow[]> {
  return groupByDay(toRows(schedule));
}

// --------------------------------------
// Helpers de formatação
// --------------------------------------

/** Ex.: "Seg • 18:30–19:30 • No-Gi (sem kimono)" */
export function formatRowHuman(row: ScheduleRow): string {
  return `${DAY_LABEL[row.day]} • ${prettyTimeRange(row.time)} • ${row.label}`;
}
