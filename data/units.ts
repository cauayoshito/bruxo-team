export type Unit = {
  id: "stiep" | "itapua" | "stella";
  name: string;
  address: string;
  mapEmbed: string;
  whatsapp: string;
  image: string;
  schedule?: { day: string; group: string; time: string }[]; // <- opcional pra não quebrar
};

export const UNITS: Unit[] = [
  {
    id: "stiep",
    name: "Unidade Stiep",
    address: "Rua Arthur Fraga — Stiep, Salvador/BA",
    mapEmbed:
      "https://www.google.com/maps?q=Rua+Arthur+Fraga,+Stiep,+Salvador+BA&output=embed",
    whatsapp: "5571999999999",
    image: "/stiep.jpg",
    schedule: [
      { day: "Seg", group: "Iniciantes", time: "19:00–20:00" },
      { day: "Qua", group: "Avançado", time: "19:00–20:30" },
    ],
  },
  {
    id: "itapua",
    name: "Unidade Itapuã",
    address: "Alto do Macaco — Itapuã, Salvador/BA (Projeto Social)",
    mapEmbed:
      "https://www.google.com/maps?q=Alto+do+Macaco,+Itapuã,+Salvador+BA&output=embed",
    whatsapp: "5571999999999",
    image: "/itapua.jpg",
    schedule: [
      { day: "Ter", group: "NOGI", time: "19:30–20:30" },
    ],
  },
  {
    id: "stella",
    name: "Unidade Stella",
    address:
      "Alameda Dilson Jatahy Fonseca, 858 — Stella Maris, Salvador/BA",
    mapEmbed:
      "https://www.google.com/maps?q=Alameda+Dilson+Jatahy+Fonseca,+858,+Stella+Maris,+Salvador+BA&output=embed",
    whatsapp: "5571999999999",
    image: "/stella.jpg",
    schedule: [
      { day: "Sáb", group: "Infantil", time: "10:00–11:00" },
    ],
  },
];
