// data/units.ts
export type DayKey = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';

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
  label: ClassLabel;
  time: string; // "HH:MM" ou "HH:MM–HH:MM"
};

export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;
  street?: string;
  district?: string;
  city?: string;
  uf?: string;
  zip?: string;
  whatsapp?: string;
  instagram?: string;
  mapsUrl?: string;
};

export const UNITS: Record<UnitSlug, UnitDetail> = {
  matriz: { slug: 'matriz', name: 'Bruxo Team — Matriz', shortName: 'Matriz' },
  stiep:  { slug: 'stiep',  name: 'Bruxo Team — Stiep',  shortName: 'Stiep'  },
  itapua: { slug: 'itapua', name: 'Bruxo Team — Itapuã', shortName: 'Itapuã' },
};

/** Índice de slugs/aliases -> slug oficial.
 *  Incluí "stella" como alias apontando para "matriz" (conforme uso antigo).
 */
export const UNITS_INDEX: Record<string, UnitSlug> = {
  matriz: 'matriz',
  stiep: 'stiep',
  itapua: 'itapua',
  stella: 'matriz', // alias legado
};
