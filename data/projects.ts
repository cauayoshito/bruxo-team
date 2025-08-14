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
};

export const PROJECTS: Project[] = [
  {
    slug: "Projeto Social Bruxo Team",
    name: "Projeto Social",
    location: "Itapuã, Salvador – BA",
    description:
      "Projeto social da Bruxo Team voltado para a comunidade do Alto do Macaco, oferecendo aulas gratuitas de Jiu-Jitsu para crianças e adolescentes.",
    heroImage: "/itapua.jpeg",
    mapQuery: "2a Travessa 17 de Setembro 12, Itapuã, Salvador - BA",
    whatsapp: "5571991505420", // preencha se quiser
  },
  {
    slug: "Projeto Social Bruxo Team",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Treinos focados em autoconfiança, condicionamento e defesa pessoal em ambiente seguro e acolhedor.",
    heroImage: "/p2.jpeg",
     mapQuery: "Centro Esportivo Armindo Biriba, rua da ilha, Itapuã, Salvador - BA",
    whatsapp: "5571991843706", // preencha se quiser
  },
  {
    slug: "Projeto Social Bruxo Team",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Eventos beneficentes e mutirões para arrecadar alimentos, roupas e brinquedos para famílias em vulnerabilidade.",
    heroImage: "/p.jpeg",
    mapQuery: "Academia impacto, rua reinado calixto, Itapuã, Salvador - BA",
    whatsapp: "5571991843706", // preencha se quiser
  },
];

export const PROJECTS_INDEX: Record<string, Project> = PROJECTS.reduce(
  (acc, p) => ((acc[p.slug] = p), acc),
  {} as Record<string, Project>
);
