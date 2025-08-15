import type { Project } from "@/components/ProjectCard";

export const PROJECTS: Project[] = [
  {
    slug: "alto-do-macaco",
    name: "Projeto Social",
    subtitle: "Alto do Macaco — Itapuã, Salvador – BA",
    image: "/projetos/alto-do-macaco.jpg", // ajuste para o caminho real da imagem
    whatsapp: "5571991505420", // número exclusivo do Alto do Macaco
    instagram: "https://instagram.com/bruxoteam_itapuaaltodomacaco",
  },
  {
    slug: "rua-da-ilha",
    name: "Projeto Social",
    subtitle: "Rua da Ilha — Itapuã, Salvador – BA",
    image: "/projetos/rua-da-ilha.jpg", // ajuste para o caminho real da imagem
    whatsapp: "5571991843706", // mesmo número da Matriz
    instagram: "https://instagram.com/bruxoteam_ruadailha",
  },
  {
    slug: "nova-brasilia-de-itapua",
    name: "Projeto Social",
    subtitle: "Nova Brasília de Itapuã — Salvador – BA",
    image: "/projetos/nova-brasilia-de-itapua.jpg", // ajuste para o caminho real da imagem
    whatsapp: "5571991843706", // mesmo número da Matriz
    instagram: "https://instagram.com/bruxoteam_novabrasiliadeitapua",
  },
];

// Índice por slug (para app/projetos-sociais/[slug]/page.tsx)
export const PROJECTS_INDEX: Record<string, Project> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, Project>
);
