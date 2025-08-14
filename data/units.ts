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
export type UnitSlug = 'matriz' | 'stiep' | 'itapua' | 'itacare';

export type Instructor = {
  name: string;
  role?: string;
  image?: string;     // /images/...
  bio?: string;
  instagram?: string; // @usuario
  imagePos?: string;  // CSS object-position (ex.: 'center top', '50% 15%')
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
    heroImage: '/stella.jpeg',
    mapQuery: 'Unidade Matriz Bruxo Team, Alameda Dilson Jatahy Fonseca 858 - Stella Maris, Salvador - BA',
    address: 'Alameda Dilson Jatahy Fonseca, 858 - Stella Maris',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571991843706',
    gallery: [
      { src: '/stella.jpeg',   alt: 'Bruxo Team — Matriz (fachada)' },
      { src: '/stella2.jpeg',  alt: 'Bruxo Team — Matriz (tatame 1)' },
      { src: '/stella3.jpeg',  alt: 'Bruxo Team — Matriz (aula em andamento)' },
    ],
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
    mapQuery: 'Rua Arthur Fraga 374 - Vale dos Rios, Salvador - BA',
    address: 'Rua Arthur Fraga, 374 - Vale dos Rios',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571992813525',
    gallery: [
      { src: '/stiep.jpeg',   alt: 'Bruxo Team — Stiep (fachada)' },
      { src: '/stiep2.jpeg',  alt: 'Bruxo Team — Stiep (tatame 1)' },
      { src: '/bruxo3.jpeg',  alt: 'Bruxo Team — Stiep (aula em andamento)' },
    ],
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
    heroImage: '/f.jpeg',
    mapQuery: 'Rua Guararapes 18, Salvador - BA',
    address: 'Rua Guararapes, 18',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571984708998',
    gallery: [
      { src: '/f.jpeg',  alt: 'Bruxo Team — Itapuã (fachada)' },
      { src: '/f2.jpeg', alt: 'Bruxo Team — Itapuã (tatame 1)' },
      { src: '/f4.jpeg', alt: 'Bruxo Team — Itapuã (aula em andamento)' },
    ],
    instructors: [
      {
        name: 'Flavio Barros',
        role: 'Mestre',
        image: '/fl.jpeg',
        imagePos: 'center top', // 👉 foca no topo para não cortar a cabeça
      },
      {
        name: 'Thiago Bruxo',
        role: 'Mestre',
        image: '/bruxo.jpeg',
      },
    ],
  },
  // ---------- NOVO: Núcleo Itacaré ----------
  {
    slug: 'itacare',
    name: 'Núcleo Itacaré',
    shortName: 'Itacaré',
    description: 'Núcleo da Bruxo Team em Itacaré.',
    seo: {
      title: 'Núcleo Itacaré — Bruxo Team',
      description: 'Conheça o Núcleo Itacaré da Bruxo Team.',
    },
    heroImage: '/y1.jpeg',
    mapQuery: 'Ponta do Xaréu, Itacaré - BA',
    address: 'Ponta do Xaréu - Itacaré',
    city: 'Itacaré',
    state: 'BA',
    whatsapp: '5571988644981',
    gallery: [
      { src: '/y1.jpeg',  alt: 'Bruxo Team — Itacaré (fachada)' },
      { src: '/y2.jpeg', alt: 'Bruxo Team — Itacaré (tatame)' },
      { src: '/y3.jpeg', alt: 'Bruxo Team — Itacaré (aula em andamento)' },
    ],
    instructors: [
      { name: 'Bruno Andrade', role: 'Professor', image: '/y.jpeg', imagePos: 'center top' },
    ],
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
