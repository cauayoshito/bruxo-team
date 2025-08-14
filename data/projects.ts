// data/projects.ts
import type { GymSchedule } from "@/data/schedule";

export type Project = {
  slug: string;
  name: string;
  location: string;      // bairro/cidade
  description: string;   // resumo curto
  heroImage?: string;    // /public/...
  address?: string;
  mapQuery?: string;
  whatsapp?: string;     // 55DDDxxxxxxx

  // horários do projeto (mesmo formato de GymSchedule)
  schedule: GymSchedule;

  // opcional — para a ProjectGallery
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;

  // opcional — SEO
  seo?: { title: string; description: string };
};

export const PROJECTS: Project[] = [
  // ESQUERDA — Alto do Coqueirinho
  {
    slug: "projeto-social-alto-do-macaco-itapua",
    name: "Projeto Social",
    location: "Itapuã, Salvador – BA",
    description:
      "Projeto social da Bruxo Team voltado para a comunidade do Alto do Macaco, oferecendo aulas gratuitas de Jiu-Jitsu para crianças e adolescentes.",
    heroImage: "/itapua.jpeg",
    mapQuery: "2a Travessa 17 de Setembro 12, Itapuã, Salvador - BA",
    whatsapp: "5571991505420",
    schedule: {
      seg: [
        { title: "KIDS RT", time: "18:00" },
        { title: "KIDS RT", time: "19:00" },
        { title: "ADULTO", time: "20:00" },
      ],
      ter: [
        { title: "60+", time: "08:00" },
        { title: "MISTA", time: "09:00" },
        { title: "COMPETIÇÃO", time: "18:00" },
      ],
      qua: [
        { title: "KIDS RT", time: "18:00" },
        { title: "KIDS RT", time: "19:00" },
        { title: "ADULTO", time: "20:00" },
      ],
      qui: [
        { title: "60+", time: "08:00" },
        { title: "MISTA", time: "09:00" },
        { title: "COMPETIÇÃO", time: "18:00" },
      ],
      sex: [],
      sab: [],
    },
    gallery: [
      { src: "/itapua.jpeg", alt: "Aulas do projeto social em Itapuã" },
      { src: "/f2.jpeg",     alt: "Treino com alunos do projeto" },
      { src: "/f4.jpeg",     alt: "Foto de turma — Projeto Social Itapuã" },
    ],
  },

  // MEIO — Ilha (Armindo Biriba)
  {
    slug: "projeto-social-armindo-biriba",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Treinos focados em autoconfiança, condicionamento e defesa pessoal em ambiente seguro e acolhedor.",
    heroImage: "/p2.jpeg",
    mapQuery:
      "Centro Esportivo Armindo Biriba, Rua da Ilha, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    schedule: {
      seg: [{ title: "MISTA", time: "19:00–21:00" }],
      ter: [],
      qua: [{ title: "MISTA", time: "19:00–21:00" }],
      qui: [],
      sex: [],
      sab: [],
    },
    gallery: [
      { src: "/p2.jpeg",    alt: "Treino no Armindo Biriba" },
      { src: "/p.jpeg",     alt: "Turma em atividade" },
      { src: "/stiep2.jpeg", alt: "Registro de grupo do projeto" },
    ],
  },

  // DIREITA — Nova Brasília (Academia Impacto)
  {
    slug: "projeto-social-academia-impacto",
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Eventos beneficentes e mutirões para arrecadar alimentos, roupas e brinquedos para famílias em vulnerabilidade.",
    heroImage: "/p.jpeg",
    mapQuery: "Academia Impacto, Rua Reinado Calixto, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    schedule: {
      seg: [
        { title: "KIDS", time: "20:00–21:00" },
        { title: "AVANÇADO", time: "21:00–22:00" },
      ],
      ter: [],
      qua: [
        { title: "KIDS", time: "20:00–21:00" },
        { title: "AVANÇADO", time: "21:00–22:00" },
      ],
      qui: [],
      sex: [],
      sab: [],
    },
    gallery: [
      { src: "/p.jpeg",       alt: "Equipe do projeto social" },
      { src: "/stella2.jpeg", alt: "Treino coletivo solidário" },
      { src: "/stella3.jpeg", alt: "Ação beneficente com a comunidade" },
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
