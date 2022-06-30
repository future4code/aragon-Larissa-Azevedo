type Pessoas = {
  nome: string;
  salário: number;
  setor: string;
  presencial: boolean;
};

enum Setores {
  MARKETING = "Marketing",
  VENDAS = "Vendas",
  FINANCEIRO = "Financeiro",
}

const pessoasColaboradoras: Pessoas[] = [
  { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: Setores.VENDAS, presencial: false },
  {nome: "Salete", salário: 2200, setor: Setores.FINANCEIRO,presencial: true,},
  { nome: "João", salário: 2800, setor: Setores.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: Setores.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: Setores.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: Setores.MARKETING, presencial: true },
];

function marketingPresencial(pessoasColaboradoras: Pessoas[]): Pessoas[] {
  return pessoasColaboradoras.filter(
    (colaboradores) =>
      colaboradores.setor === "Marketing" && colaboradores.presencial === true
  );
}


console.log(marketingPresencial(pessoasColaboradoras));
