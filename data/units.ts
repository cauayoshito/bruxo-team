// data/units.ts
// Tipos centrais e cadastro das unidades

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
  /** "HH:MM" ou "HH:MM–HH:MM" (aceita -, – ou —) */
  time: string;
};

export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;

  // Dados públicos/opcionais (preencha quando tiver)
  street?: string;
  district?: string;
  city?: string;
  uf?: string;          // ex.: "BA"
  zip?: string;
  whatsapp?: string;    // ex.: "+55 71 9 9999-9999"
  instagram?: string;   // ex.: "@bruxoteam"
  mapsUrl?: string;
};

// Cadastro simples (preencha os campos de endereço/contato depois)
export const UNITS: Record<UnitSlug, UnitDetail> = {
  matriz: {
    slug: 'matriz',
    name: 'Bruxo Team — Matriz',
    shortName: 'Matriz',
    // street: 'Rua ...',
    // whatsapp: '(71) 9 ....',
  },
  stiep: {
    slug: 'stiep',
    name: 'Bruxo Team — Stiep',
    shortName: 'Stiep',
  },
  itapua: {
    slug: 'itapua',
    name: 'Bruxo Team — Itapuã',
    shortName: 'Itapuã',
  },
};
