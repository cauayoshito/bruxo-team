// --------------------------------------
// Tipos de Projeto Social
// --------------------------------------
export type ProjectSlug = 'projeto1' | 'projeto2' | 'projeto3';

export type ProjectDetail = {
  slug: ProjectSlug;
  name: string;
  shortName?: string;

  // Endereço/contato (opcionais)
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  whatsapp?: string; // Ex: "5571999999999"
  instagram?: string; // URL do Instagram

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
};

// --------------------------------------
// Lista de projetos sociais
// --------------------------------------
export const PROJECTS: ProjectDetail[] = [
  {
    slug: 'projeto1',
    name: 'Projeto Social 1',
    shortName: 'Projeto 1',
    description: 'Projeto que apoia crianças da comunidade.',
    seo: {
      title: 'Projeto Social 1 — Bruxo Team',
      description: 'Conheça o Projeto Social 1 da Bruxo Team.',
    },
    heroImage: '/projeto1.jpg',
    mapQuery: 'Rua Exemplo 123, Salvador - BA',
    address: 'Rua Exemplo, 123',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571999999999',
    instagram: 'https://instagram.com/projeto1',
    gallery: [
      { src: '/projeto1-1.jpg', alt: 'Atividade 1' },
      { src: '/projeto1-2.jpg', alt: 'Atividade 2' },
    ],
    featured: true,
  },
  {
    slug: 'projeto2',
    name: 'Projeto Social 2',
    shortName: 'Projeto 2',
    description: 'Projeto voltado para inclusão de jovens no esporte.',
    seo: {
      title: 'Projeto Social 2 — Bruxo Team',
      description: 'Conheça o Projeto Social 2 da Bruxo Team.',
    },
    heroImage: '/projeto2.jpg',
    mapQuery: 'Av. Exemplo 456, Salvador - BA',
    address: 'Av. Exemplo, 456',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571988888888',
    instagram: 'https://instagram.com/projeto2',
    gallery: [
      { src: '/projeto2-1.jpg', alt: 'Evento 1' },
      { src: '/projeto2-2.jpg', alt: 'Evento 2' },
    ],
  },
  {
    slug: 'projeto3',
    name: 'Projeto Social 3',
    shortName: 'Projeto 3',
    description: 'Projeto que promove saúde e bem-estar.',
    seo: {
      title: 'Projeto Social 3 — Bruxo Team',
      description: 'Conheça o Projeto Social 3 da Bruxo Team.',
    },
    heroImage: '/projeto3.jpg',
    mapQuery: 'Praça Exemplo, 789 - Salvador - BA',
    address: 'Praça Exemplo, 789',
    city: 'Salvador',
    state: 'BA',
    whatsapp: '5571977777777',
    instagram: 'https://instagram.com/projeto3',
    gallery: [
      { src: '/projeto3-1.jpg', alt: 'Ação 1' },
      { src: '/projeto3-2.jpg', alt: 'Ação 2' },
    ],
  },
];

// --------------------------------------
// Índice rápido por slug
// --------------------------------------
export const PROJECTS_INDEX: Record<ProjectSlug, ProjectDetail> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<ProjectSlug, ProjectDetail>
);
