import { Client } from "./types";

export const bankClients: Client[] = [
  {
    id: 1,
    name: "Daisy Jones",
    cpf: "654.693.621-66",
    birthday: "26/06/1951",
    balance: 667890,
    transactions: [
      { value: 6456,
        dueDate: "12/6/2017",
        description: "Wild Flower Iniciative",
      },
    ],
  },
  {
    id:2,
    name: "Evelyn Hugo",
    cpf: "789.753.741-77",
    birthday: "07/07/1938",
    balance: 777264,
    transactions: [
      {
        value: 7264,
        dueDate: "23/3/2017",
        description: "to Monique",
      },
      {
        value: 777257,
        dueDate: "24/3/2017",
        description: "this is my last.",
      },
    ],
  },
  {
    id: 3,
    name: "Nina Riva",
    cpf: "569.147.369-45",
    birthday: "01/12/1970",
    balance: 1026,
    transactions:[{
        value: 269,
        dueDate: "29/5/2021",
        description:"to jay, as he asked."
    },]
  },

  {
    id: 4,
    name: "Carrie Soto",
    cpf: "519.361.147-23",
    birthday: "06/09/1968",
    balance: 2267,
    transactions:[]
  },
];
