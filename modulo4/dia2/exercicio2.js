let geraTabuada = (multiplicador) => {
  let multiplica = multiplicador;
  let i;

  if (multiplica > 10 || multiplica === 0 || typeof multiplicador != "number") {
    console.log(`Erro. Parâmetro inválido. Deve ser um número e entre 1 e 10.`);
  } else {
        console.log(`Tabuada de ${multiplicador}`);
    for (i = 1; i <= 10; i++) {
      console.log(multiplica + " X " + i + " = " + multiplica * i);
    }
  }
};

geraTabuada(5);
geraTabuada("10")
geraTabuada(50);
