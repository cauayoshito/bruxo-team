// data/units.ts
export type Instructor = {
  name: string;
  role: string;
  bio?: string;
  photo: string; // /instructors/arquivo.jpg
};

export type DayKey = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab';

export type ScheduleRow = {
  day: DayKey;
  label: string;   // "Mista", "Kids", "No-Gi", etc.
  time: string;    // "06:00", "19:00-20:30"
};

export type UnitDetail = {
  slug: 'stiep' | 'itapua' | 'stella';
  name: string;
  shortName: string;     // "Stiep" | "Itapuã" | "Matriz"
  whatsapp: string;      // "557199999999"
  address: string;
  mapQuery: string;      // usado no iframe Google Maps
  heroImage: string;     // /units/slug/hero.jpg
  description: string;   // texto sobre a unidade
  instructors: Instructor[];
  schedule: ScheduleRow[];
  gallery: string[];     // imgs em /units/slug/...
  seo: {
    title: string;
    description: string;
  };
  /** marca para aparecer primeiro/estilizado */
  featured?: boolean;
};

export const UNITS: UnitDetail[] = [
  {
    slug: 'stiep',
    name: 'Unidade Stiep',
    shortName: 'Stiep',
    whatsapp: '5571992813525',
    address: 'Rua Arthur Fraga — Stiep, Salvador/BA',
    mapQuery: 'Rua Arthur Fraga, Stiep, Salvador - BA',
    heroImage: '/stiep.jpeg',
    description:
      'A unidade Stiep reúne treinos de base técnica forte e ritmo constante, ideal para iniciantes e avançados que buscam evolução consistente.',
    instructors: [
      {
        name: 'Ybere Camargo',
        role: 'Head Coach',
        bio:
          'Professor desde 2019 à frente da equipe. Linha técnica, disciplina e formação humana.',
        photo: '/ybere.jpeg',
      },
    ],
    schedule: [
      { day: 'seg', label: 'Mista', time: '06:00' },
      { day: 'seg', label: 'Kids', time: '10:00' },
      { day: 'qua', label: 'Mista', time: '12:00' },
      { day: 'sex', label: 'Mista', time: '20:15' },
    ],
    gallery: ['/stiep2.jpeg', '/stiep.jpeg', '/units/stiep/gallery-3.jpg'],
    seo: {
      title: 'Bruxo Team — Unidade Stiep',
      description:
        'Treinos técnicos e evolução constante na Unidade Stiep. Iniciantes e avançados. Matrículas abertas.',
    },
  },
  {
    slug: 'itapua',
    name: 'Unidade Itapuã',
    shortName: 'Itapuã',
    whatsapp: '557199999999',
    address: 'Alto do Macaco — Itapuã, Salvador/BA (Projeto Social)',
    mapQuery: 'Alto do Macaco, Itapuã, Salvador - BA',
    heroImage: '/itapua.jpeg',
    description:
      'Projeto social da Bruxo Team com foco em inclusão, disciplina e formação cidadã através do Jiu-Jitsu.',
    instructors: [
      {
        name: 'Lucas Ratto',
        role: 'Head Coach',
        photo: '/ratto.jpeg',
      },
    ],
    schedule: [
      { day: 'ter', label: 'Mista', time: '06:00' },
      { day: 'qua', label: 'Kids', time: '10:00' },
      // complete com demais horários quando tiver
    ],
    gallery: ['/itapua2.jpeg', '/itapua.jpeg', '/itapua3.jpeg'],
    seo: {
      title: 'Bruxo Team — Unidade Itapuã (Projeto Social)',
      description:
        'Projeto social em Itapuã: inclusão e disciplina no tatame. Conheça horários e faça sua inscrição.',
    },
  },
  {
    slug: 'stella',                         // mantém o slug para não quebrar links
    name: 'Unidade Matriz',                 // ← novo nome
    shortName: 'Matriz',                    // ← novo short
    featured: true,                         // ← destaque
    whatsapp: '5571991843706',
    address:
      'Alameda Dilson Jatahy Fonseca, 858 — Stella Maris, Salvador/BA',
    mapQuery:
      'Alameda Dilson Jatahy Fonseca, 858 - Stella Maris, Salvador - BA',
    heroImage: '/stella.jpeg',
    description:
      'Unidade Matriz da Bruxo Team, com treinos para todas as idades e metodologia própria. Base técnica forte e formação humana.',
    instructors: [
      {
        name: 'Jean Ribeiro',
        role: 'Instrutor Kids',
        bio:
          'Responsável pelas turmas infantis. Foco em disciplina, respeito e confiança, com didática própria.',
        photo: '/jotape.jpeg',
      },
      {
        name: 'Tiago “Bruxo”',
        role: 'Head Coach',
        photo: '/bruxo.jpeg',
      },
    ],
    schedule: [
      { day: 'seg', label: 'Mista', time: '06:00' },
      { day: 'seg', label: 'Kids', time: '10:00' },
      { day: 'qua', label: 'Kids', time: '10:00' },
      { day: 'sex', label: 'Kids', time: '10:00' },
      { day: 'sab', label: 'Open Mat', time: '10:00' },
      { day: 'seg', label: 'Mista', time: '20:15' },
    ],
    gallery: ['/stella2.jpeg', '/stella.jpeg', '/units/stella/gallery-3.jpg'],
    seo: {
      title: 'Bruxo Team — Unidade Matriz',
      description:
        'Unidade Matriz em Stella Maris. Treinos para todas as idades. Veja horários e fale no WhatsApp.',
    },
  },
];

export const UNITS_INDEX = UNITS.reduce<Record<string, UnitDetail>>(
  (acc, u) => ((acc[u.slug] = u), acc),
  {}
);
