// lib/schedule.ts
export type CanonicalLabel =
  | "Jiu-Jitsu (com kimono)"
  | "No-Gi (sem kimono)"
  | "Mista"
  | "Kids"
  | "Feminino"
  | "Competição"
  | "60+"
  | "Open Mat"
  | "Avançado";

const strip = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

export function normalizeLabel(input: string): CanonicalLabel {
  const s = strip(input).replace(/\s+/g, " ");
  if (/\b(no\s*gi|nogi|sem\s*kimono)\b/.test(s)) return "No-Gi (sem kimono)";
  if (/\b(gi|kimono|com\s*kimono)\b/.test(s)) return "Jiu-Jitsu (com kimono)";
  if (/\b(kids|infantil|kids\s*rt|rt\s*kids)\b/.test(s)) return "Kids";
  if (/\b(feminino|women)\b/.test(s)) return "Feminino";
  if (/\b(competicao|competição|comp)\b/.test(s)) return "Competição";
  if (/\b(60\+|melhor\s+idade|idosos?)\b/.test(s)) return "60+";
  if (/\b(open\s*mat|treino\s*livre)\b/.test(s)) return "Open Mat";
  if (/\b(avancad[ao]|avançado|advanced)\b/.test(s)) return "Avançado";
  return "Mista";
}

export function normalizeClock(part: string): string {
  if (!part) throw new Error("Hora vazia");
  let s = part.toLowerCase().replace(/\s+/g, "");
  s = s.replace(/[h.]/g, ":");
  s = s.replace(/^(\d{3,4})$/, (_m, g1: string) =>
    g1.length === 3 ? `${g1[0]}:${g1.slice(1)}` : `${g1.slice(0, 2)}:${g1.slice(2)}`
  );
  if (!s.includes(":")) s = `${s}:00`;
  const [hRaw, mRaw = "00"] = s.split(":");
  const h = Math.max(0, Math.min(23, parseInt(hRaw || "0", 10)));
  const m = Math.max(0, Math.min(59, parseInt(mRaw || "0", 10)));
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function normalizeTime(input: string): string {
  if (!input) throw new Error("Entrada vazia");
  let s = input.replace(/\u2013|\u2014|\u2212/g, "-");
  s = s.replace(/\s+(a|as|às|ate|to)\s+/gi, "-").replace(/\s+/g, " ").trim();
  if (!s.includes("-")) return normalizeClock(s);
  const [startRaw, endRaw] = s.split("-", 2);
  return `${normalizeClock(startRaw)}–${normalizeClock(endRaw)}`; // EN DASH
}

export function normalizeEntry(entry: { label: string; time: string }) {
  return { label: normalizeLabel(entry.label), time: normalizeTime(entry.time) };
}
