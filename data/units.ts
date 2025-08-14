// data/units.ts

// --------------------------------------
// Dias da semana (chaves do cronograma)
// --------------------------------------
export type DayKey = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';

// --------------------------------------
// Nomes oficiais das aulas (padronizados)
// --------------------------------------
export type ClassLabel =
  | 'Jiu-Jitsu (com kimono)'
  | 'No-Gi (sem kimono)'
  | 'Mista'
  | 'Kids'
  | 'Feminino'
  | 'Competição'
  | '60+'
  | 'Open Mat';

// --------------------------------------
// Linha de horário (já padronizada)
// time: "HH:MM" ou "HH:MM–HH:MM"
// --------------------------------------
export type ScheduleRow = {
  day: DayKey;
  label: ClassLabel;   // nomes padronizados
  time: string;        // "06:00" ou "19:00–20:30"
};

// --------------------------------------
// Unidades
// --------------------------------------
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
  /** Matriz/destaque na home (aparece primeiro) */
  featured?: boolean;
};

// Lista de unidades (ajuste os dados reais quando tiver)
export const UNITS: UnitDetail[] = [
  { slug: 'matriz', name: 'Unidade Matriz', featured: true }, // destaque
  { slug: 'stiep',  name: 'Unidade Stiep' },
  { slug: 'itapua', name: 'Unidade Itapuã' },
];

// Índice rápido por slug para acesso O(1)
export const UNITS_INDEX: Record<UnitSlug, UnitDetail> = UNITS.reduce(
  (acc, u) => {
    acc[u.slug] = u;
    return acc;
  },
  {} as Record<UnitSlug, UnitDetail>
);
