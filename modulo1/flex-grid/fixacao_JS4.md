
# Fixação JavaScript 4

~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contador = 0;
  for (let numero of arrayDeNumeros){
    if (numero === numeroEscolhido) {
      (contador = contador + 1)
    }
  } if (contador > 0){
  return `O número ${numeroEscolhido} aparece ${contador}x`
} else return `Número não encontrado`
}