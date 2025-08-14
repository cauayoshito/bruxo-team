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
  heroImage?: string;
  mapQuery?: string;

  // Galeria (opcional)
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;

  // Destaque
  featured?: boolean;

  // Instrutores (opcional)
  instructors?: Instructor[];
};

// --------------------------------------
// Lista de unidades
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
    heroImage: '/matriz.jpeg',
    mapQuery: 'Unidade Matriz Bruxo Team, Alameda Dilson Jatahy Fonseca 858 - Stella Maris, Salvador - BA',
    address: 'Alameda Dilson Jatahy Fonseca, 858 - Stella Maris',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571991843706',
    instructors: [
      {
        name: 'Tiago Bruxo',
        role: 'Mestre',
        image: '/bruxo.jpeg',
      },
      {
        name: 'Jean Ribeiro',
        role: 'Mestre Kids',
        image: '/jotape.jpeg',
      }
    ]
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
    heroImage: '/stiep.jpeg',
    mapQuery: 'Unidade Stiep Bruxo Team, Rua Arthur Fraga 374 - Vale dos Rios, Salvador - BA',
    address: 'Rua Arthur Fraga, 374 - Vale dos Rios',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571992813525',
    instructors: [
      {
        name: 'Ybere Camargo',
        role: 'Mestre',
        image: '/ybere.jpeg',
      }
    ]
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
    heroImage: '/iitapua.jpeg',
    mapQuery: 'Unidade Itapuã Bruxo Team, Rua Guararapes 18, Salvador - BA',
    address: 'Rua Guararapes, 18',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571984708998',
    instructors: [
      {
        name: 'Flavio Barros',
        role: 'Mestre',
        image: '/images/instrutores/flavio-barros.jpg',
      }
    ]
  },
];

// --------------------------------------
// Índice rápido por slug
// --------------------------------------
export const UNITS_INDEX: Record<UnitSlug, UnitDetail> = UNITS.reduce(
  (acc, u) => {
    acc[u.slug] = u;
    return acc;
  },
  {} as Record<UnitSlug, UnitDetail>
);
