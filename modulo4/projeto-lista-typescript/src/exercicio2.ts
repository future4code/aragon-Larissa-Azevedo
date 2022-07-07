function nomeENascimento(): string {
  const nome = process.argv[2];
  const dataNascimento = process.argv[3].split(/[/]/);

  const dia = dataNascimento[0];
  const mes = dataNascimento[1];
  const ano = dataNascimento[2];

  return `Olá, me chamo ${nome}, nasci no dia ${dia}, no mês ${mes} e ano de ${ano}.`;
}

console.log(nomeENascimento());
