// lib/schedule.ts
import type { ClassLabel, ScheduleRow } from "@/data/units";

// variações → padrão oficial
export const LABEL_MAP: Record<string, ClassLabel> = {
  // No-Gi
  "nogi": "No-Gi (sem kimono)",
  "no-gi": "No-Gi (sem kimono)",
  "no gi": "No-Gi (sem kimono)",
  "sem kimono": "No-Gi (sem kimono)",

  // Kimono
  "jiu-jitsu": "Jiu-Jitsu (com kimono)",
  "bjj": "Jiu-Jitsu (com kimono)",
  "jj": "Jiu-Jitsu (com kimono)",
  "kimono": "Jiu-Jitsu (com kimono)",
  "com kimono": "Jiu-Jitsu (com kimono)",

  // Outros
  "mista": "Mista",
  "kids": "Kids",
  "infantil": "Kids",          // troque para "Infantil" se preferir
  "feminino": "Feminino",
  "fem": "Feminino",
  "competicao": "Competição",
  "competição": "Competição",
  "60+": "60+",
  "open mat": "Open Mat",
  "open-mat": "Open Mat",
};

export function normalizeLabel(input: string): ClassLabel {
  const key = input.trim().toLowerCase();
  return LABEL_MAP[key] ?? "Mista"; // fallback seguro
}

// garante HH:MM e usa travessão “–” p/ intervalos
export function normalizeTime(raw: string): string {
  const pad = (n: string) => n.padStart(2, "0");
  const clean = raw.replace(/\s+/g, "").replace(/-/g, "–");

  if (clean.includes("–")) {
    const [a, b] = clean.split("–");
    const [h1, m1 = "00"] = a.split(":");
    const [h2, m2 = "00"] = b.split(":");
    return `${pad(h1)}:${pad(m1)}–${pad(h2)}:${pad(m2)}`;
    }
  const [h, m = "00"] = clean.split(":");
  return `${pad(h)}:${pad(m)}`;
}

// normaliza um array de horários
export function normalizeSchedule(rows: ScheduleRow[]): ScheduleRow[] {
  return rows.map((r) => ({
    ...r,
    label: normalizeLabel(r.label as unknown as string),
    time: normalizeTime(r.time),
  }));
}
