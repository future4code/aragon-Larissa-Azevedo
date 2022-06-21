let clientesCadastrados = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

const cadastraCliente = (novoCliente) => {
  let index = clientesCadastrados.findIndex(
    (value) => value.id === novoCliente.id
);
  if (index < 0) {
      clientesCadastrados.push(novoCliente);
    return clientesCadastrados;
  } else {
    return `Erro. Parâmetro Inválido. id ${novoCliente.id} já existe.`;
  }
};

console.log(cadastraCliente({ id: 5, nome: "Larissa" }));
console.log(cadastraCliente({ id: 1, nome: "Larissa" }));