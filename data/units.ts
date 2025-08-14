// data/units.ts

export type DayKey = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';

// ✅ nomes oficiais para as aulas
export type ClassLabel =
  | 'Jiu-Jitsu (com kimono)'
  | 'No-Gi (sem kimono)'
  | 'Mista'
  | 'Kids'
  | 'Feminino'
  | 'Competição'
  | '60+'
  | 'Open Mat';

export type ScheduleRow = {
  day: DayKey;
  label: ClassLabel;   // nomes padronizados
  time: string;        // "06:00" ou "19:00–20:30"
};

// --- ADICIONAR A PARTIR DAQUI ---

export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  whatsapp?: string;
};

// Lista de unidades
export const UNITS: UnitDetail[] = [
  { slug: 'matriz', name: 'Unidade Matriz' },
  { slug: 'stiep',  name: 'Unidade Stiep' },
  { slug: 'itapua', name: 'Unidade Itapuã' },
];

// Índice rápido por slug
export const UNITS_INDEX: Record<UnitSlug, UnitDetail> = UNITS.reduce(
  (acc, u) => {
    acc[u.slug] = u;
    return acc;
  },
  {} as Record<UnitSlug, UnitDetail>
);
