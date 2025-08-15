export type ProjectSlug = 'alto-do-macaco' | 'rua-da-ilha' | 'nova-brasilia-de-itapua';

export type ProjectDetail = {
  slug: ProjectSlug;
  name: string;
  description?: string;
  address?: string;
  whatsapp?: string;
  instagram?: string;
  heroImage?: string;
  mapQuery?: string;
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;
  seo?: { title: string; description: string };
};

export const PROJECTS: ProjectDetail[] = [
  {
    slug: "alto-do-macaco",
    name: "Projeto Social — Alto do Macaco",
    description: "Projeto social do núcleo Alto do Macaco.",
    address: "Itapuã, Salvador – BA",
    whatsapp: "5571991505420",
    instagram: "https://instagram.com/bruxoteam_itapuaaltodomacaco",
    heroImage: "/projetos/alto-do-macaco.jpg",
    mapQuery: "Alto do Macaco, Itapuã, Salvador - BA",
    seo: {
      title: "Projeto Social — Alto do Macaco",
      description: "Conheça o projeto social Alto do Macaco da Bruxo Team.",
    },
    gallery: [],
  },
  {
    slug: "rua-da-ilha",
    name: "Projeto Social — Rua da Ilha",
    description: "Projeto social do núcleo Rua da Ilha.",
    address: "Itapuã, Salvador – BA",
    whatsapp: "5571991843706",
    instagram: "https://instagram.com/bruxoteam_ruadailha",
    heroImage: "/projetos/rua-da-ilha.jpg",
    mapQuery: "Rua da Ilha, Itapuã, Salvador - BA",
    seo: {
      title: "Projeto Social — Rua da Ilha",
      description: "Conheça o projeto social Rua da Ilha da Bruxo Team.",
    },
    gallery: [],
  },
  {
    slug: "nova-brasilia-de-itapua",
    name: "Projeto Social — Nova Brasília de Itapuã",
    description: "Projeto social do núcleo Nova Brasília de Itapuã.",
    address: "Nova Brasília de Itapuã, Salvador – BA",
    whatsapp: "5571991843706",
    instagram: "https://instagram.com/bruxoteam_novabrasiliadeitapua",
    heroImage: "/projetos/nova-brasilia-de-itapua.jpg",
    mapQuery: "Nova Brasília de Itapuã, Salvador - BA",
    seo: {
      title: "Projeto Social — Nova Brasília de Itapuã",
      description: "Conheça o projeto social Nova Brasília de Itapuã da Bruxo Team.",
    },
    gallery: [],
  },
];

export const PROJECTS_INDEX: Record<ProjectSlug, ProjectDetail> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<ProjectSlug, ProjectDetail>
);
