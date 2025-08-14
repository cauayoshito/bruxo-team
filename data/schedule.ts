// data/schedule.ts
import type { UnitSlug } from "@/data/units";
import type { GymSchedule } from "@/lib/schedule";

// Exemplo de grade — ajuste livremente
const BASE_EMPTY: GymSchedule = {
  seg: [], ter: [], qua: [], qui: [], sex: [], sab: [],
};

// ---------- MATRIZ ----------
const SCHEDULE_MATRIZ: GymSchedule = {
  seg: [
    { title: "Jiu-Jitsu (com kimono)", time: "06:30–07:30" },
    { title: "No-Gi (sem kimono)",     time: "12:00–13:00" },
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  ter: [
    { title: "Kids",                   time: "18:00–18:50" },
    { title: "Jiu-Jitsu (com kimono)", time: "19:00–20:00" },
    { title: "Competição",             time: "20:00–21:00" },
  ],
  qua: [
    { title: "60+",                    time: "08:00–08:50" },
    { title: "No-Gi (sem kimono)",     time: "12:00–13:00" },
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  qui: [
    { title: "Kids",                   time: "18:00–18:50" },
    { title: "Feminino",               time: "19:00–19:50" },
    { title: "Jiu-Jitsu (com kimono)", time: "20:00–21:00" },
  ],
  sex: [
    { title: "Jiu-Jitsu (com kimono)", time: "06:30–07:30" },
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  sab: [
    { title: "Open Mat",               time: "10:00–11:30" },
  ],
};

// ---------- STIEP ----------
const SCHEDULE_STIEP: GymSchedule = {
  ...BASE_EMPTY,
  seg: [
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  qua: [
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  sex: [
    { title: "No-Gi (sem kimono)",     time: "19:00–20:00" },
  ],
};

// ---------- ITAPUÃ ----------
const SCHEDULE_ITAPUA: GymSchedule = {
  ...BASE_EMPTY,
  ter: [
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  qui: [
    { title: "Mista",                  time: "19:00–20:00" },
  ],
  sab: [
    { title: "Open Mat",               time: "09:00–10:30" },
  ],
};

// Mapa final por unidade
export const SCHEDULES_BY_UNIT: Record<UnitSlug, GymSchedule> = {
  matriz: SCHEDULE_MATRIZ,
  stiep: SCHEDULE_STIEP,
  itapua: SCHEDULE_ITAPUA,
};
