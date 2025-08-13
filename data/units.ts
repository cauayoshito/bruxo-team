export type Unit = {
  slug: string;
  name: string;
  address: string;
  whatsapp: string; // E.164 digits only, e.g., 5571999990000
  mapQuery: string; // for Google Maps embed
  schedule: { day: string; group: string; time: string }[];
  images?: string[];
};

export const units: Unit[] = [
  {
    slug: "stiep",
    name: "Unidade Stiep",
    address: "Rua Arthur Fraga — Stiep, Salvador/BA",
    whatsapp: "5571999990000",
    mapQuery: "Rua Arthur Fraga, Stiep, Salvador - BA",
    schedule: [
      { day: "Seg", group: "Iniciantes", time: "19:00–20:00" },
      { day: "Qua", group: "Avançado", time: "19:00–20:30" },
      { day: "Sáb", group: "Infantil", time: "10:00–11:00" },
    ],
  },
  {
    slug: "itapua",
    name: "Unidade Itapuã",
    address: "Alto do Macaco — Itapuã, Salvador/BA (Projeto Social)",
    whatsapp: "5571999990000",
    mapQuery: "Alto do Macaco, Itapuã, Salvador - BA",
    schedule: [
      { day: "Ter", group: "Iniciantes", time: "19:00–20:00" },
      { day: "Qui", group: "NOGI", time: "19:30–20:30" },
    ],
  },
  {
    slug: "stella",
    name: "Unidade Stella",
    address: "Alameda Dilson Jatahy Fonseca, 858 — Stella Maris, Salvador/BA",
    whatsapp: "5571999990000",
    mapQuery: "Alameda Dilson Jatahy Fonseca 858, Stella Maris, Salvador - BA",
    schedule: [
      { day: "Seg", group: "Feminino", time: "18:30–19:30" },
      { day: "Qua", group: "Avançado", time: "20:00–21:30" },
    ],
  },
];
