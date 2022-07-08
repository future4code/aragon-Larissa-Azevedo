export type User = {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
  balance: string;
  transactions: bills[]
};

export type bills = {
  value: number;
  dueDate: number;
  description: string;
};

export type date = {
    day: number,
    month: number,
    year: number
}
