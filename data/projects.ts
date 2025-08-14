// data/projects.ts
import type { DayKey } from "@/data/schedule";

export type Project = {
  slug: string;
  name: string;
  unitSlug?: string; // slug da unidade para puxar grade
  location?: string;
  description?: string;
  schedule: Partial<Record<DayKey, Array<{ title: string; time: string }>>>;
  gallery?: Array<{ src: string; alt?: string; width?: number; height?: number }>;
};

// Lista de projetos
export const PROJECTS: Project[] = [
  {
    slug: "rato-de-tatame-alto-do-macaco",
    name: "Rato de Tatame – Alto do Macaco",
    unitSlug: "itapua",
    location: "Itapuã, Salvador - BA",
    description:
      "Projeto social da Bruxo Team voltado para a comunidade do Alto do Macaco, oferecendo aulas gratuitas de Jiu-Jitsu para crianças e adolescentes.",
    schedule: {
      seg: [{ title: "Infantil", time: "18:00" }, { title: "Juvenil/Adulto", time: "19:00" }],
      qua: [{ title: "Infantil", time: "18:00" }, { title: "Juvenil/Adulto", time: "19:00" }],
      sex: [{ title: "Infantil", time: "18:00" }, { title: "Juvenil/Adulto", time: "19:00" }],
    },
    gallery: [
      { src: "/images/projetos/rato-1.jpg", alt: "Aula infantil no projeto Rato de Tatame" },
      { src: "/images/projetos/rato-2.jpg", alt: "Treino de jovens atletas" },
    ],
  },
  {
    slug: "projeto-exemplo-2",
    name: "Projeto Exemplo 2",
    location: "Bairro Exemplo, Salvador - BA",
    description: "Outro projeto social exemplo para teste.",
    schedule: {
      ter: [{ title: "Turma Única", time: "18:30" }],
      qui: [{ title: "Turma Única", time: "18:30" }],
    },
  },
];

// Index para acesso rápido por slug
export const PROJECTS_INDEX: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p])
);
