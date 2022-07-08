export type Client = {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
  transactions: bills[]
};

export type bills = {
  value: number;
  dueDate: string;
  description: string;
};

export type date = {
    day: number,
    month: number,
    year: number
}
