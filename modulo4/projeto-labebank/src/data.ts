import { User } from "./types";

export const bankCustomers: User[] = [
  {
    id: Date.now(),
    name: "Daisy Jones",
    cpf: "654.693.621-66",
    birthday: "26/06/1951",
    balance: "R$66.890,000",
    transactions: [
      { value: 6.456,
        dueDate: 12 / 6 / 2017,
        description: "Wild Flower Iniciative",
      },
    ],
  },
  {
    id: Date.now(),
    name: "Evelyn Hugo",
    cpf: "789.753.741-77",
    birthday: "07/07/1938",
    balance: "R$777.264.147,00",
    transactions: [
      {
        value: 7.000,
        dueDate: 23 / 3 / 2017,
        description: "to Monique",
      },
      {
        value: 777.257,
        dueDate: 24 / 3 / 2017,
        description: "this is my last.",
      },
    ],
  },
  {
    id: Date.now(),
    name: "Nina Riva",
    cpf: "569.147.369-45",
    birthday: "01/12/1970",
    balance: "R$10.269,78",
    transactions:[{
        value: 69,
        dueDate: 29/5/2021,
        description:"to jay, as he asked."
    },]
  },

  {
    id: Date.now(),
    name: "Carrie Soto",
    cpf: "519.361.147-23",
    birthday: "06/09/1968",
    balance: "R$26.423,12",
    transactions:[]
  },
];
