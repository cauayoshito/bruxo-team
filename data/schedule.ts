// data/schedule.ts
export type Session = {
  title: string;
  time: string;
  note?: string;
};

export type DayKey = "seg" | "ter" | "qua" | "qui" | "sex" | "sab";

export type GymSchedule = Record<DayKey, Session[]>;

// ---------- BRUXO TEAM — STELLA ----------
export const scheduleStella: GymSchedule = {
  seg: [
    { title: "MISTA", time: "06:00" },
    { title: "KIDS", time: "10:00" },
    { title: "MISTA", time: "12:00" },
    { title: "INICIANTES", time: "15:00" },
    { title: "KIDS", time: "16:00" },
    { title: "MISTA", time: "20:15" },
  ],
  ter: [
    { title: "MISTA", time: "06:00" },
    { title: "NO-GI", time: "12:00" },
    { title: "INICIANTES", time: "15:00" },
    { title: "KIDS", time: "16:00" },
  ],
  qua: [
    { title: "KIDS", time: "10:00" },
    { title: "MISTA", time: "12:00" },
    { title: "MISTA", time: "20:15" },
  ],
  qui: [
    { title: "MISTA", time: "06:00" },
    { title: "NO-GI", time: "12:00" },
    { title: "INICIANTES", time: "15:00" },
    { title: "KIDS", time: "16:00" },
  ],
  sex: [
    { title: "KIDS", time: "10:00" },
    { title: "MISTA", time: "12:00" },
    { title: "KIDS", time: "16:00" },
    { title: "MISTA", time: "20:15" },
  ],
  sab: [
    { title: "OPEN-MAT", time: "10:00" },
  ],
};

// ---------- BRUXO TEAM — STIEP ----------
export const scheduleStiep: GymSchedule = {
  seg: [
    { title: "JIU-JITSU (com kimono)", time: "07:00–09:00" },
    { title: "JIU-JITSU (com kimono)", time: "20:00–22:00" },
  ],
  ter: [
    { title: "JIU-JITSU Infantil", time: "18:00–19:00" },
    { title: "JIU-JITSU Feminino", time: "19:00–20:00" },
    { title: "NO-GI", time: "20:00–22:00" },
  ],
  qua: [
    { title: "JIU-JITSU (com kimono)", time: "07:00–09:00" },
    { title: "JIU-JITSU (com kimono)", time: "20:00–22:00" },
  ],
  qui: [
    { title: "JIU-JITSU Infantil", time: "18:00–19:00" },
    { title: "JIU-JITSU Feminino", time: "19:00–20:00" },
    { title: "NO-GI", time: "20:00–22:00" },
  ],
  sex: [],
  sab: [],
};

// ---------- MAPA DE HORÁRIOS POR UNIDADE ----------
export const SCHEDULES_BY_UNIT: Record<string, GymSchedule | null> = {
  stella: scheduleStella,
  stiep: scheduleStiep,
  itapua: null, // Quando tiver os horários de Itapuã, substitua o null pelo GymSchedule
};
