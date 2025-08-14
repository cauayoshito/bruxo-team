// data/projects.ts
export type Project = {
  slug: string;
  name: string;
  location: string;      // bairro/cidade
  description: string;   // resumo curto
  heroImage?: string;    // /public/...
  address?: string;
  mapQuery?: string;
  whatsapp?: string;     // 55DDDxxxxxxx

  // opcional — para a ProjectGallery
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;

  // opcional — SEO
  seo?: { title: string; description: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "projeto-social-alto-do-macaco-itapua",
    name: "Projeto Social",
    location: "Itapuã, Salvador – BA",
    description:
      "Projeto social da Bruxo Team voltado para a comunidade do Alto do Macaco, oferecendo aulas gratuitas de Jiu-Jitsu para crianças e adolescentes.",
    heroImage: "/itapua.jpeg",
    mapQuery: "2a Travessa 17 de Setembro 12, Itapuã, Salvador - BA",
    whatsapp: "5571991505420",
    gallery: [
      { src: "/itapua.jpeg", alt: "Aulas do projeto social em Itapuã" },
      { src: "/itapua2.jpeg",     alt: "Treino com alunos do projeto" },
      { src: "/itapua3.jpeg",     alt: "Foto de turma — Projeto Social Itapuã" },
    ],
  },
  {
    slug: "projeto-social-armindo-biriba",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Treinos focados em autoconfiança, condicionamento e defesa pessoal em ambiente seguro e acolhedor.",
    heroImage: "/p2.jpeg",
    mapQuery: "Centro Esportivo Armindo Biriba, Rua da Ilha, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    gallery: [
      { src: "/p2.jpeg",    alt: "Treino no Armindo Biriba" },
      { src: "/b1.jpeg",     alt: "Turma em atividade" },
      { src: "/x.jpeg", alt: "Registro de grupo do projeto" },
    ],
  },
  {
    slug: "projeto-social-academia-impacto",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Eventos beneficentes e mutirões para arrecadar alimentos, roupas e brinquedos para famílias em vulnerabilidade.",
    heroImage: "/p.jpeg",
    mapQuery: "Academia Impacto, Rua Reinado Calixto, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    gallery: [
      { src: "/p.jpeg",       alt: "Equipe do projeto social" },
      { src: "/c2.jpeg", alt: "Treino coletivo solidário" },
      { src: "/c.jpeg", alt: "Ação beneficente com a comunidade" },
    ],
  },
];

export const PROJECTS_INDEX: Record<string, Project> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    acc[p.slug.toLowerCase()] = p; // tolerante a caixa
    return acc;
  },
  {} as Record<string, Project>
);
