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
  | 'Open Mat'
  | 'Avançado';

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
// Tipos de Unidade / Instrutor
// --------------------------------------
export type UnitSlug = 'matriz' | 'stiep' | 'itapua';

export type Instructor = {
  name: string;
  role?: string;
  image?: string;     // /images/...
  bio?: string;
  instagram?: string; // @usuario
};

export type UnitDetail = {
  slug: UnitSlug;
  name: string;
  shortName?: string;

  // Endereço/contato (opcionais)
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  whatsapp?: string;

  // Texto/SEO (opcionais)
  description?: string;
  seo?: { title: string; description: string };

  // Mídia e mapa (opcionais)
  heroImage?: string; // URL absoluta ou caminho público (/images/...)
  mapQuery?: string;  // texto para Google Maps (ex.: "Rua X, 123 - Salvador")

  // Galeria (opcional)
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;

  // Destaque
  featured?: boolean;

  // Instrutores (opcional)
  instructors?: Instructor[];
};

// --------------------------------------
// Lista de unidades (ajuste os dados reais quando tiver)
// --------------------------------------
export const UNITS: UnitDetail[] = [
  {
    slug: 'matriz',
    name: 'Unidade Matriz',
    shortName: 'Matriz',
    featured: true,
    description: 'A unidade principal da Bruxo Team.',
    seo: {
      title: 'Unidade Matriz — Bruxo Team',
      description: 'Conheça a unidade Matriz da Bruxo Team.',
    },
    heroImage: '/images/unidades/matriz-hero.jpg',
    mapQuery: 'Unidade Matriz Bruxo Team, Salvador - BA',
    address: 'Endereço da Matriz (ajuste aqui)',
    // Exemplo de instrutores (opcional)
    // instructors: [
    //   { name: 'Fulano da Silva', role: 'Faixa-Preta', instagram: '@fulano.bjj' },
    // ],
  },
  {
    slug: 'stiep',
    name: 'Unidade Stiep',
    shortName: 'Stiep',
    description: 'Unidade Stiep da Bruxo Team.',
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
    shortName: 'Itapuã',
    description: 'Unidade Itapuã da Bruxo Team.',
    seo: {
      title: 'Unidade Itapuã — Bruxo Team',
      description: 'Conheça a unidade Itapuã da Bruxo Team.',
    },
    heroImage: '/images/unidades/itapua-hero.jpg',
    mapQuery: 'Unidade Itapuã Bruxo Team, Salvador - BA',
    address: 'Endereço de Itapuã (ajuste aqui)',
  },
];

// --------------------------------------
// Índice rápido por slug (acesso O(1))
// --------------------------------------
export const UNITS_INDEX: Record<UnitSlug, UnitDetail> = UNITS.reduce(
  (acc, u) => {
    acc[u.slug] = u;
    return acc;
  },
  {} as Record<UnitSlug, UnitDetail>
);
