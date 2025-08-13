// data/units.ts
export type Unit = {
  id: 'stiep' | 'itapua' | 'stella';
  name: string;
  address: string;
  mapEmbed: string;
  // 👇 novo
  image: string;
};

export const UNITS: Unit[] = [
  {
    id: 'stiep',
    name: 'Unidade Stiep',
    address: 'Rua Arthur Fraga — Stiep, Salvador/BA',
    mapEmbed: '...iframe...',
    image: '/stiep.jpg',   // 👈 caminho em /public
  },
  {
    id: 'itapua',
    name: 'Unidade Itapuã',
    address: 'Alto do Macaco — Itapuã, Salvador/BA (Projeto Social)',
    mapEmbed: '...iframe...',
    image: '/itapua.jpg',
  },
  {
    id: 'stella',
    name: 'Unidade Stella',
    address: 'Alameda Dilson Jatahy Fonseca, 858 — Stella Maris, Salvador/BA',
    mapEmbed: '...iframe...',
    image: '/stella.jpg',
  },
];
