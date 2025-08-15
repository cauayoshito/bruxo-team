import type { Project } from "@/components/ProjectCard";

// números de WhatsApp
const WHATSAPP_MATRIZ = "5571991843706"; // matriz + rua da ilha + nova brasília
const WHATSAPP_ALTO_DO_MACACO = "5571991505420"; // alto do macaco

export const PROJECTS: Project[] = [
  {
    slug: "alto-do-macaco",
    name: "Projeto Social",
    subtitle: "Alto do Macaco — Itapuã, Salvador – BA",
    image: "/projetos/alto-do-macaco.jpg", // ajuste o caminho real
    whatsapp: WHATSAPP_ALTO_DO_MACACO,
    instagram: "https://instagram.com/bruxoteam_itapuaaltodomacaco",
  },
  {
    slug: "rua-da-ilha",
    name: "Projeto Social",
    subtitle: "Rua da Ilha — Itapuã, Salvador – BA",
    image: "/projetos/rua-da-ilha.jpg",
    whatsapp: WHATSAPP_MATRIZ,
    instagram: "https://instagram.com/bruxoteam_ruadailha",
  },
  {
    slug: "nova-brasilia-de-itapua",
    name: "Projeto Social",
    subtitle: "Nova Brasília de Itapuã — Salvador – BA",
    image: "/projetos/nova-brasilia-de-itapua.jpg",
    whatsapp: WHATSAPP_MATRIZ,
    instagram: "https://instagram.com/bruxoteam_novabrasiliadeitapua",
  },
];
