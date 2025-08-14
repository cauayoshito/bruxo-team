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
  label: ClassLabel;
  time: string;
};

// --------------------------------------
// Unidades
// --------------------------------------
export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;

  // Dados de endereço/contato (opcionais)
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  whatsapp?: string;

  // SEO / OpenGraph (opcionais)
  seo?: {
    title: string;
    description: string;
  };
  heroImage?: string;
  mapQuery?: string;

  /** Galeria de fotos da unidade (opcional) */
  gallery?: Array<{
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;

  /** Matriz/destaque na home */
  featured?: boolean;
};

// Lista de unidades
export const UNITS: UnitDetail[] = [
  {
    slug: 'matriz',
    name: 'Unidade Matriz',
    featured: true,
    seo: {
      title: 'Unidade Matriz — Bruxo Team',
      description: 'Conheça a unidade Matriz da Bruxo Team.',
    },
    heroImage: '/images/unidades/matriz-hero.jpg',
    mapQuery: 'Unidade Matriz Bruxo Team, Salvador - BA',
    address: 'Endereço da Matriz (ajuste aqui)',
    gallery: [
      { src: '/images/unidades/matriz-1.jpg', alt: 'Treino na Matriz' },
      { src: '/images/unidades/matriz-2.jpg', alt: 'Sala principal' },
    ],
  },
  {
    slug: 'stiep',
    name: 'Unidade Stiep',
    seo: {
      title: 'Unidade Stiep — Bruxo Team',
      description: 'Conheça a unidade Stiep da Bruxo Team.',
    },
    heroImage: '/images/unidades/stiep-hero.jpg',
    mapQuery: 'Unidade Stiep Bruxo Team, Salvador - BA',
    address: 'Endereço do Stiep (ajuste aqui)',
  },
  {
    slug: 'itapua',
    name: 'Unidade Itapuã',
    seo: {
      title: 'Unidade Itapuã — Bruxo Team',
      description: 'Conheça a unidade Itapuã da Bruxo Team.',
    },
    heroImage: '/images/unidades/itapua-hero.jpg',
    mapQuery: 'Unidade Itapuã Bruxo Team, Salvador - BA',
    address: 'Endereço de Itapuã (ajuste aqui)',
  },
];

// Índice rápido por slug
export const UNITS_INDEX: Record<UnitSlug, UnitDetail> = UNITS.reduce(
  (acc, u) => {
    acc[u.slug] = u;
    return acc;
  },
  {} as Record<UnitSlug, UnitDetail>
);
