// data/projects.ts
import type { DayKey } from "@/data/schedule";

export type Project = {
  slug: string;
  name: string;
  unitSlug?: "itapua";
  location: string;
  description?: string;
  schedule: Partial<Record<DayKey, Array<{ title: string; time: string }>>>;
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;
};

export const PROJECTS: Project[] = [
  {
    slug: "rato-de-tatame-alto-do-macaco",
    name: "Rato de Tatame — Alto do Macaco",
    unitSlug: "itapua",
    location: "Alto do Macaco, Itapuã",
    description:
      "Projeto social da Bruxo Team com foco em inclusão, disciplina e desenvolvimento por meio do Jiu-Jitsu.",
    schedule: {
      seg: [
        { time: "18:00", title: "Kids RT" },
        { time: "19:00", title: "Kids RT" },
        { time: "20:00", title: "Adulto" },
      ],
      ter: [
        { time: "08:00", title: "60+" },
        { time: "09:00", title: "Mista" },
        { time: "18:00", title: "Competição" },
      ],
      qua: [
        { time: "18:00", title: "Kids RT" },
        { time: "19:00", title: "Kids RT" },
        { time: "20:00", title: "Adulto" },
      ],
      qui: [
        { time: "08:00", title: "60+" },
        { time: "09:00", title: "Mista" },
        { time: "18:00", title: "Competição" },
      ],
    },
    gallery: [],
  },
  {
    slug: "rua-da-ilha-sparta-squad",
    name: "Rua da Ilha — Sparta Squad",
    unitSlug: "itapua",
    location: "Rua da Ilha",
    description: "Projeto em estruturação. Horários serão divulgados em breve.",
    schedule: {},
    gallery: [],
  },
  {
    slug: "bruxo-team-nova-brasilia-de-itapua",
    name: "Bruxo Team Nova Brasília de Itapuã",
    unitSlug: "itapua",
    location: "Nova Brasília de Itapuã",
    description:
      "Projeto com turmas Kids e Avançado para desenvolvimento técnico e físico.",
    schedule: {
      seg: [
        { time: "20:00–21:00", title: "Kids" },
        { time: "21:00–22:00", title: "Avançado" },
      ],
      qua: [
        { time: "20:00–21:00", title: "Kids" },
        { time: "21:00–22:00", title: "Avançado" },
      ],
    },
    gallery: [],
  },
];

export const PROJECTS_INDEX: Record<string, Project> =
  PROJECTS.reduce((acc, p) => ((acc[p.slug] = p), acc), {} as Record<string, Project>);
