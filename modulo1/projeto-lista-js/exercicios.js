// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura =  Number(prompt("Qual a altura do retângulo?"))
  const largura = Number(prompt("Qual a largura do retângulo?"))
  const area = (altura * largura)
  console.log(area)
  return area
}

// EXERCÍCIO 02

function imprimeIdade(){
  // implemente sua lógica aqui
  const anoAtual =  Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const resultado = (anoAtual - anoNascimento)
	console.log(resultado)
  return resultado
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual o seu email?")

  const fraseCompleta = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  console.log(fraseCompleta)
  return fraseCompleta  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let tresCoresFavoritas = []
  const corfavorita1= prompt("Qual a sua primeira cor favorita?")
  const corFavorita2= prompt("Qual a sua segunda cor favorita?")
  const corFavorita3= prompt("Qual a sua terceira cor favorita?")

  const adicionarCorFavorita1= tresCoresFavoritas.push(corfavorita1)
  const adicionarCorFavorita2= tresCoresFavoritas.push(corFavorita2)
  const adicionarCorFavorita3= tresCoresFavoritas.push(corFavorita3)

  console.log(tresCoresFavoritas)
  return tresCoresFavoritas
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let frase = ("oi")
  let maiuscula = frase.toUpperCase()

  console.log(maiuscula)
  return maiuscula
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
  let i = 0
  console.log(frutas [i])
  return frutas
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
  let i = 0
  console.log(frutas [i+4])
  return frutas
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}