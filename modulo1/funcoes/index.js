/* _Exercícios de interpretação de código_

-- Exercício 1 --

a) Será impresso no console os valores 10 e 50.
b) Nada será impresso no console porque o método "console.log" é o que permite que mensagens sejam impressas no console.

-- Exercício 2 --

a) essa função retorna o texto do usuário em letras minúsculas e verifica se o array possui a palavra "cenoura"

b) O metódo includes() retorna o valor como true ou false, portanto os valores impressos serão
   i.  eu gosto de cenoura = true
   ii. cenoura é bom pra vista = true
   iii. cenouras crescem na terra = false**

   ** >> depois de pesquisar, descobri que o metódo includes() diferencia maiusculas e minúsculas mas não singular e plural.
   O elemento "cenouras" contém "cenoura", portanto o resultado será true.
*/

// _Exercícios de escrita de código_ //

// -- Exercicio 1, a) -- //

let sobre = "Meu nome é Larissa, tenho 28 anos, moro em Macaé/RJ e sou estudante da Labenu."

const sobreMim = function() {
    return sobre
}

const informacoes = sobreMim()
console.log(informacoes)

// -- Exercicio 1, b) -- //

const retorno = function(nome, idade, cidade, profissao){ 
    const fraseCompleta = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
  return fraseCompleta
}

const resultado = retorno("Larissa", "28", "Macaé/RJ", "estudante")
console.log(resultado)


// -- Exercicio 2, a) -- //

function somaComRetorno (n1, n2) {

    const soma = n1 + n2
    return soma
}

console.log(somaComRetorno(25,37))


// -- Exercicio 2, b) -- //

let primeiroNumero = Number(prompt("Digite um número: "))
let segundoNumero = Number(prompt("Digite outro número: "))

function maiorOuIgual (primeiroNumero, segundoNumero){

  resposta = primeiroNumero >= segundoNumero
  return resposta
}

const imprimeResposta = maiorOuIgual(primeiroNumero, segundoNumero)
console.log(resposta)


// -- Exercicio 2, c) -- //

let numero = Number(prompt("Digite um número: "))

function parOuImpar(numero) {

    resposta = numero%2 === 0 
    return resposta
}

const imprimeResposta = parOuImpar(numero)
console.log(resposta)


// -- Exercício 2, d) -- //

let frase = "É possível desenvolver novas habilidades."

const maiusculas = function(frase) {
	return frase.toUpperCase()
}

const resposta = maiusculas(frase)
console.log(frase.length, resposta)

// -- Exercicio 3 -- //

function soma (n1, n2) {
    const soma = n1 + n2
    return soma
}

function subtracao (n1, n2) {
    const subtracao = n1 - n2
    return subtracao
}

function multiplicacao (n1, n2) {
    const multiplicacao = n1 * n2
    return multiplicacao
}

function divisao (n1, n2) {
    const divisao = n1 / n2
    return divisao
}

let n1Usuario = Number(prompt("Digite um número: "))
let n2Usuario = Number(prompt("Digite um número: "))
console.log(`Números Inseridos: ${n1Usuario}, ${n2Usuario}`)

const imprimeSoma = soma(n1Usuario, n2Usuario)
console.log(`Soma:${imprimeSoma}`)

const imprimeSubtracao = subtracao(n1Usuario, n2Usuario)
console.log(`Subtração:${imprimeSubtracao}`)

const imprimeMultiplicacao = multiplicacao(n1Usuario, n2Usuario)
console.log(`Multiplicação:${imprimeMultiplicacao}`)

const imprimeDivisao = divisao(n1Usuario, n2Usuario)
console.log(`Divisão:${imprimeDivisao}`)

