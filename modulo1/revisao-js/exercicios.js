// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const retorna = array
    return retorna.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const retorna = array
    return retorna.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const retorna = array
    return retorna.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    const pares = array.filter((numero) => {
        return numero % 2 === 0
    })
    return pares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter((numero) => {
        return numero % 2 === 0
    }) 

    const paresAoQuadrado = pares.map((numero) => {
        return numero * numero
    })

    return paresAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

   let maiorNumero = -Infinity
   for (let i = 0; i < array.length; i++) {
       if (array[i] > maiorNumero){
        maiorNumero = array[i]
       }
   }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let numeros = {}
    if (num1>num2) {
        numeros = {
          maiorNumero: num1,
          maiorDivisivelPorMenor:  num1 % num2 === 0,
          diferenca: num1 - num2
        }
    } else if (num2>num1){
        numeros = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 === 0,
            diferenca: num2 - num1,

        } 

    } else if (num1 === num2){
        numeros = {
            maiorNumero: num1 && num2,
            maiorDivisivelPorMenor: num1 % num2 ===0,
            diferenca: num1-num2
        }  

    } 

    return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
        let pares = [];
        for (let i = 0; pares.length < n; i++) {
            if (i % 2 == 0) {
                pares.push(i);
            }
        }
        return pares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}