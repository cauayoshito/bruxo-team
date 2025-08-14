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
  | 'Open Mat'
  | 'Avançado';

export type ScheduleRow = { day: DayKey; label: ClassLabel; time: string };

export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;
  address?: string; city?: string; state?: string;
  phone?: string; whatsapp?: string;
  description?: string;
  seo?: { title: string; description: string };
  heroImage?: string;
  mapQuery?: string;
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;
  featured?: boolean;
};

export const UNITS: UnitDetail[] = [
  {
    slug: 'matriz',
    name: 'Unidade Matriz',
    featured: true,
    description: 'Matriz da Bruxo Team.',
    seo: { title: 'Unidade Matriz — Bruxo Team', description: 'Conheça a unidade Matriz.' },
    heroImage: '/images/unidades/matriz-hero.jpg',
    mapQuery: 'Unidade Matriz Bruxo Team, Salvador - BA',
    address: 'Endereço da Matriz (ajuste aqui)',
  },
  {
    slug: 'stiep',
    name: 'Unidade Stiep',
    seo: { title: 'Unidade Stiep — Bruxo Team', description: 'Conheça a unidade Stiep.' },
    heroImage: '/images/unidades/stiep-hero.jpg',
    mapQuery: 'Unidade Stiep Bruxo Team, Salvador - BA',
    address: 'Endereço do Stiep (ajuste aqui)',
  },
  {
    slug: 'itapua',
    name: 'Unidade Itapuã',
    seo: { title: 'Unidade Itapuã — Bruxo Team', description: 'Conheça a unidade Itapuã.' },
    heroImage: '/images/unidades/itapua-hero.jpg',
    mapQuery: 'Unidade Itapuã Bruxo Team, Salvador - BA',
    address: 'Endereço de Itapuã (ajuste aqui)',
  },
];

export const UNITS_INDEX: Record<UnitSlug, UnitDetail> =
  UNITS.reduce((acc, u) => ((acc[u.slug] = u), acc), {} as Record<UnitSlug, UnitDetail>);
