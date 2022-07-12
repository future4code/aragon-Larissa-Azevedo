//_Exercício 2_

export type Produto = {
  id: string;
  name: string;
  price: number;
};

export const produtos: Produto[] = [
  {
    id: "1",
    name: "livro",
    price: 26,
  },

  {
    id: "2",
    name: "CD",
    price: 35,
  },

  {
    id: "3",
    name: "DVD",
    price: 30,
  },
];
