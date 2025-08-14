// lib/schedule.ts
// --------------------------------------
// Utilidades para lidar com horários/aulas
// --------------------------------------

import type { DayKey, ClassLabel, ScheduleRow } from "@/data/units";

// Tipos usados aqui e em data/schedule.ts
export type GymSlot = {
  title: ClassLabel;
  /** "HH:MM" ou "HH:MM–HH:MM" (aceita -, – ou —) */
  time: string;
};

export type GymSchedule = Record<DayKey, GymSlot[]>;

// Ordem e rótulos
export const DAY_ORDER: DayKey[] = ["seg", "ter", "qua", "qui", "sex", "sab"];
export const DAY_LABEL: Record<DayKey, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
};

const RANGE_SEPARATORS = ["–", "—", "-"]; // en-dash, em-dash, hyphen

export type TimeRange = {
  startMins: number;
  endMins: number;   // pode ser >1440 se cruzar meia-noite
  durationMins: number;
};

export function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function parseTimeToMinutes(t: string): number {
  const m = t.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return NaN;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return NaN;
  return hh * 60 + mm;
}

export function minutesToHHMM(mins: number): string {
  const m = ((mins % 1440) + 1440) % 1440;
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  return `${pad2(hh)}:${pad2(mm)}`;
}

export function normalizeTimeRange(raw: string): TimeRange | null {
  const sep = RANGE_SEPARATORS.find((s) => raw.includes(s));
  if (!sep) {
    const start = parseTimeToMinutes(raw);
    if (Number.isNaN(start)) return null;
    const end = start + 60; // assume 1h
    return { startMins: start, endMins: end, durationMins: end - start };
  }
  const [lhs, rhs] = raw.split(sep).map((s) => s.trim());
  const start = parseTimeToMinutes(lhs);
  const endRaw = parseTimeToMinutes(rhs);
  if (Number.isNaN(start) || Number.isNaN(endRaw)) return null;
  const end = endRaw < start ? endRaw + 24 * 60 : endRaw;
  return { startMins: start, endMins: end, durationMins: end - start };
}

export function prettyTimeRange(raw: string): string {
  const r = normalizeTimeRange(raw);
  if (!r) return raw.trim();
  return `${minutesToHHMM(r.startMins)}–${minutesToHHMM(r.endMins)}`;
}

/** 👇 Compatível com o que o app importa */
export function normalizeTime(raw: string): string {
  return prettyTimeRange(raw);
}

/** Mapeia rótulos soltos para os nomes oficiais do tipo ClassLabel */
const LABEL_MAP: Array<[RegExp, ClassLabel]> = [
  [/^(jiu.?jitsu).*kimono|com\s*kimono/i, "Jiu-Jitsu (com kimono)"],
  [/^jiu.?jitsu/i, "Jiu-Jitsu (com kimono)"],
  [/no[\s-]*gi|sem\s*kimono/i, "No-Gi (sem kimono)"],
  [/feminin/i, "Feminino"],
  [/kids?|infantil/i, "Kids"],
  [/mista|all\s*levels?|geral/i, "Mista"],
  [/competi|equipa? de desempenho/i, "Competição"],
  [/60\+|melhor idade|sênior/i, "60+"],
  [/open\s*mat/i, "Open Mat"],
];

/** 👇 Compatível com o que o app importa */
export function normalizeLabel(raw: string): ClassLabel {
  const s = (raw || "").trim();
  for (const [re, label] of LABEL_MAP) {
    if (re.test(s)) return label;
  }
  // fallback seguro
  return "Mista";
}

// ---------- validação / transformação ----------
export type RowWithMeta = ScheduleRow & TimeRange;

export function isValidRow(row: ScheduleRow): boolean {
  if (!row?.day || !row?.label || !row?.time) return false;
  if (!DAY_ORDER.includes(row.day)) return false;
  return normalizeTimeRange(row.time) !== null;
}

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

export function materialize(rows: ScheduleRow[]): RowWithMeta[] {
  return rows
    .map((r) => {
      const tr = normalizeTimeRange(r.time);
      if (!tr) return null;
      return { ...r, ...tr };
    })
    .filter(Boolean) as RowWithMeta[];
}

export function sortRows(rows: ScheduleRow[]): ScheduleRow[] {
  const enriched = materialize(rows).sort((a, b) => {
    const d = DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day);
    if (d !== 0) return d;
    return a.startMins - b.startMins;
  });
  return enriched.map(({ startMins: _a, endMins: _b, durationMins: _c, ...rest }) => rest);
}

export function groupByDay(rows: ScheduleRow[]): Record<DayKey, ScheduleRow[]> {
  const out = Object.fromEntries(DAY_ORDER.map((d) => [d, []])) as Record<DayKey, ScheduleRow[]>;
  for (const r of sortRows(rows)) out[r.day].push(r);
  return out;
}

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

// ---------- próximas aulas ----------
export type NextClass = RowWithMeta & { dayIndex: number; startsInMins: number };

function nowInMinutes(localNow: Date = new Date()): { dayIndex: number; mins: number } {
  const day = (localNow.getDay() + 6) % 7; // 0=Seg
  const mins = localNow.getHours() * 60 + localNow.getMinutes();
  return { dayIndex: day, mins };
}

export function getNextClasses(schedule: GymSchedule, count = 3, localNow: Date = new Date()): NextClass[] {
  const rows = materialize(toRows(schedule));
  const { dayIndex: todayIdx, mins: nowMins } = nowInMinutes(localNow);

  const timeline: NextClass[] = [];
  for (let offset = 0; offset < 7; offset++) {
    const idx = (todayIdx + offset) % DAY_ORDER.length;
    const day = DAY_ORDER[idx];
    const dayRows = rows.filter((r) => r.day === day);
    for (const r of dayRows) {
      const startsToday = offset === 0 ? r.startMins > nowMins : true;
      if (!startsToday) continue;
      const startsIn = offset * 1440 + (r.startMins - (offset === 0 ? nowMins : 0));
      timeline.push({ ...r, dayIndex: idx, startsInMins: startsIn });
    }
  }

  return timeline.sort((a, b) => a.startsInMins - b.startsInMins).slice(0, count);
}

export function filterByLabel(rows: ScheduleRow[], label: ClassLabel): ScheduleRow[] {
  return rows.filter((r) => r.label === label);
}

export function toOrderedTable(schedule: GymSchedule): Record<DayKey, ScheduleRow[]> {
  return groupByDay(toRows(schedule));
}

export function formatRowHuman(row: ScheduleRow): string {
  return `${DAY_LABEL[row.day]} • ${prettyTimeRange(row.time)} • ${row.label}`;
}
