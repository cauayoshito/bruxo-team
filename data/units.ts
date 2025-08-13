// data/units.ts

export type Unit = {
  id: 'stiep' | 'itapua' | 'stella';
  name: string;
  address: string;
  mapEmbed: string;
  whatsapp: string;
  image: string;
};

export const UNITS: Unit[] = [
  {
    id: 'stiep',
    name: 'Unidade Stiep',
    address: 'Rua Arthur Fraga — Stiep, Salvador/BA',
    mapEmbed:
      'https://www.google.com/maps?q=Rua+Arthur+Fraga,+Stiep,+Salvador+BA&output=embed',
    whatsapp: '5571999999999', // coloque o número real
    image: '/turmas/stiep.jpg', // caminho relativo à pasta public
  },
  {
    id: 'itapua',
    name: 'Unidade Itapuã',
    address: 'Alto do Macaco — Itapuã, Salvador/BA (Projeto Social)',
    mapEmbed:
      'https://www.google.com/maps?q=Alto+do+Macaco,+Itapuã,+Salvador+BA&output=embed',
    whatsapp: '5571999999999', // coloque o número real
    image: '/turmas/itapua.jpg',
  },
  {
    id: 'stella',
    name: 'Unidade Stella',
    address:
      'Alameda Dilson Jatahy Fonseca, 858 — Stella Maris, Salvador/BA',
    mapEmbed:
      'https://www.google.com/maps?q=Alameda+Dilson+Jatahy+Fonseca,+858,+Stella+Maris,+Salvador+BA&output=embed',
    whatsapp: '5571999999999', // coloque o número real
    image: '/turmas/stella.jpg',
  },
];
