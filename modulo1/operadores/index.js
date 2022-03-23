// **Exercicios de interpretação de código** //

/* _Exercicio 1_

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

--Resposta--

console.log("a. ", resultado) - o resultado sera false
console.log("b. ", resultado) - o resultado tambem sera false
console.log("c. ", resultado) - DÚVIDA
console.log("d. ", typeof resultado) - o tipo é booleano

_Exercicio 2_ 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

-- Resposta --

O prompt irá receber valor númerico e não foi convertido para Number e será lido como string, 
logo a soma não será efetuada e os números em string serão concatenados.

_Exercício 3_

Solução sugerida

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//Exercicios de escrita de código//

//_Exercício 1_//
    
let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade da sua melhor amiga?"))

const diferencaIdade = idadeUsuario - idadeAmigo

idadeUsuario === idadeAmigo
idadeUsuario != idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log("A diferença da idade de vocês é de " + diferencaIdade + " anos.")

//_Exercicio 2_//

let numeroPar = Number(prompt("Digite um número par:"))

let restoDaDivisao = numeroPar %2

console.log(restoDaDivisao)

//Quando o usuario digita um número par, o resultado impresso é 0. Quando um número ímpar é digitado, o resultado impresso é 1.//

//_Exercicio 3_//

let idadeUsuario = Number(prompt("Qual a sua idade em anos?"))

console.log("Você tem " + idadeUsuario * 12 + " meses de idade.")
console.log("Você tem " + idadeUsuario * 365 + " dias de idade.")
console.log("Você tem " + idadeUsuario * 60 + " horas de idade.")

//_Exercicio 4_//

let numeroUsuario = Number(prompt("Digite um número:"))
let outroNumeroUsuario = Number(prompt("Digite outro número:"))

let numeroDivisivel = numeroUsuario % outroNumeroUsuario

console.log("O primeiro número é maior que segundo?", numeroUsuario > outroNumeroUsuario)
console.log("O primeiro número é igual ao segundo?", numeroUsuario === outroNumeroUsuario)
console.log("O primeiro número é divisível pelo segundo?", numeroDivisivel === 0)
console.log("O segundo número é divisível pelo primeiro?", numeroDivisivel === 0)












