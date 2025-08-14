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
  // horários do projeto (mesma estrutura das unidades)
  schedule: GymSchedule;

  // opcional — galeria para a ProjectGallery
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;

  // opcional — SEO
  seo?: { title: string; description: string };
};

/* -------------------- Schedules por projeto -------------------- */

// ILHA (projeto do meio) — Segunda e Quarta 19–21
const scheduleIlha: GymSchedule = {
  seg: [{ title: "MISTA", time: "19:00–21:00" }],
  ter: [],
  qua: [{ title: "MISTA", time: "19:00–21:00" }],
  qui: [],
  sex: [],
  sab: [],
};

// NOVA BRASÍLIA (projeto da direita)
// Segunda e Quarta: 20–21 KIDS, 21–22 AVANÇADO
const scheduleNovaBrasilia: GymSchedule = {
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
};

// ALTO DO COQUEIRINHO (projeto da esquerda)
// Seg: Kids RT 18:00, Kids RT 19:00, Adulto 20:00
// Ter: 60+ 8:00, Mista 9:00, Competição 18:00
// Qua: Kids RT 18:00, Kids RT 19:00, Adulto 20:00
// Qui: 60+ 8:00, Mista 9:00, Competição 18:00
const scheduleCoqueirinho: GymSchedule = {
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
};

/* -------------------- Lista de Projetos -------------------- */

export const PROJECTS: Project[] = [
  {
    slug: "projeto-social-alto-do-macaco-itapua", // esquerda
    name: "Projeto Social",
    location: "Itapuã, Salvador – BA",
    description:
      "Projeto social da Bruxo Team voltado para a comunidade do Alto do Macaco, oferecendo aulas gratuitas de Jiu-Jitsu para crianças e adolescentes.",
    heroImage: "/itapua.jpeg",
    mapQuery: "2a Travessa 17 de Setembro 12, Itapuã, Salvador - BA",
    whatsapp: "5571991505420",
    schedule: scheduleCoqueirinho,
    gallery: [
      { src: "/itapua2.jpeg",  alt: "Projeto Social — Aula 1" },
      { src: "/itapua3.jpeg", alt: "Projeto Social — Aula 2" },
      { src: "/itapua.jpeg", alt: "Projeto Social — Equipe" },
    ],
    seo: {
      title: "Projeto Social — Alto do Macaco (Itapuã)",
      description:
        "Aulas gratuitas de Jiu-Jitsu para crianças e adolescentes da comunidade do Alto do Macaco.",
    },
  },
  {
    slug: "projeto-social-armindo-biriba", // do meio (Ilha)
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Treinos focados em autoconfiança, condicionamento e defesa pessoal em ambiente seguro e acolhedor.",
    heroImage: "/p2.jpeg",
    mapQuery: "Centro Esportivo Armindo Biriba, Rua da Ilha, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    schedule: scheduleIlha,
    gallery: [
      { src: "/p2.jpeg", alt: "Projeto Social — Armindo Biriba 1" },
      { src: "/b1.jpeg",  alt: "Projeto Social — Armindo Biriba 2" },
      { src: "/x.jpeg", alt: "Projeto Social — Armindo Biriba 3" },
    ],
    seo: {
      title: "Projeto Social — Armindo Biriba",
      description: "Aulas de Jiu-Jitsu às segundas e quartas, 19h–21h.",
    },
  },
  {
    slug: "projeto-social-academia-impacto", // direita (Nova Brasília)
    name: "Projeto Social",
    location: "Salvador – BA",
    description:
      "Eventos beneficentes e treinos para diferentes níveis com foco no desenvolvimento social.",
    heroImage: "/p.jpeg",
    mapQuery: "Academia Impacto, Rua Reinado Calixto, Itapuã, Salvador - BA",
    whatsapp: "5571991843706",
    schedule: scheduleNovaBrasilia,
    gallery: [
      { src: "/c.jpeg",  alt: "Projeto Social — Academia Impacto 1" },
      { src: "/p.jpeg", alt: "Projeto Social — Academia Impacto 2" },
      { src: "/c2.jpeg", alt: "Projeto Social — Academia Impacto 3" },
    ],
    seo: {
      title: "Projeto Social — Academia Impacto (Nova Brasília)",
      description:
        "KIDS 20h–21h e AVANÇADO 21h–22h (segundas e quartas).",
    },
  },
];

/* Índice por slug (case-insensitive) */
export const PROJECTS_INDEX: Record<string, Project> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    acc[p.slug.toLowerCase()] = p;
    return acc;
  },
  {} as Record<string, Project>
);
