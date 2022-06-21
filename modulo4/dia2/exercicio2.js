let geraTabuada = (multiplicador) => {
  let multiplica = multiplicador;
  let i;
  console.log(`Tabuada de ${multiplicador}`);

  if (multiplica > 10 || multiplica === 0) {
    console.log(`Erro. Parâmetro inválido. Número precisa valer entre 1 e 10.`);
  } else {
    for (i = 1; i <= 10; i++) {
      console.log(multiplica + " X " + i + " = " + multiplica * i);
    }
  }
};

geraTabuada(5);
