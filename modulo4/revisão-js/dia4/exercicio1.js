const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

function geraItensUnicos(primeiraLista, segundaLista) {
  const listaUnificada = primeiraLista.concat(segundaLista);
  const listaFinal = [];

  for (let itemLista of listaUnificada) {
    const itemFinal = listaFinal.find((item) => item.nome === itemLista.nome);

    if (!itemFinal) {
      listaFinal.push(itemLista);
    }
  }
  return listaFinal;
}

console.log(geraItensUnicos(primeiraLista, segundaLista));
