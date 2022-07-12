export type Client = {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
  transactions: Bills[]
};

export type Bills = {
  value: number;
  dueDate: string;
  description: string;
};

export type Date = {
    day: number,
    month: number,
    year: number
}
