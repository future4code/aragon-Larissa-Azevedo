// Exercícios de interpretação de código //

/* ---Exercício 1---

a) O código pede que o usuário digite um número para testar e retorna a resposta dizendo se o número é par ou ímpar.

b) Para os números pares.

c) Para os números ímpares.

---Exercício 2---

a) O código serve para que o usuário digite uma fruta para descobrir o preço. Caso seja uma das frutas especificadas no código, ele irá retornar o preço específico.
Se a fruta digitada não esteja na função, ele retornará o preço 'default'.

b) O preço da fruta Maçã é R$ 2.25.

c) O preço da fruta  Pêra  é  R$  5, já que o código não será interrompido se seguirá a leitura para o próximo bloco.

---Exercício 3---

a)A primeira linha pede que o usuário digite um número.

b) Caso o usuário digite 10, a resposta impressa será "Esse número passou no teste" mas de for digitado -10 não será impresso nada porque este número
é menor que 0.

c) SIm, haverá erro no console porque "let mensagem = "Essa mensagem é secreta!!!" foi declarada dentro de uma função, em escopo local,
 e não está acessível pela variável declarada em escopo global.

*/

// Exercícios de escrita de código //

// ---Exercício 1, a/b-- //

const numero = Number(prompt("Qual sua idade?"))

 //---Exercício 1, c---//

const idadeMinima = 18;
const idadeUsuario = numero;

if (idadeUsuario >= idadeMinima) {
  console.log("Você pode dirigir!")
} else {
  console.log("Você não pode dirigir!")
}

// ---Exercício 2 --- //

let perguntaTurno = prompt("Em qual turno você estuda? (M/V/N)")

if (perguntaTurno === "M")
console.log("Bom dia!")

if (perguntaTurno ==="V") 
(console.log ("Boa tarde!"))

if (perguntaTurno ==="N")
console.log("Boa noite!")

// ---Exercício 3 --- //

let perguntaTurnoDeEstudo = prompt("Em qual turno você estuda? (M/V/N)")

function checaTurnoEstudos(turno) {
    switch(turno) {
        case "M":
            console.log("Bom dia!")
            break
        
        case ("V"):
            console.log("Boa tarde!")
            break

        case ("N"):
            console.log("Boa noite!")
            break
    }
    
}

const resultado = checaTurnoEstudos(perguntaTurnoDeEstudo)
console.log(resultado)

// ---Exercício 4 --- //

const defineGeneroDeFilme = prompt("Qual o gênero de filme vocês irão assistir?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

const generoEscolhido = "fantasia";
const valorIngresso = 15;

if (defineGeneroDeFilme === generoEscolhido && precoIngresso <= valorIngresso) {
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme!")
}

// ---Desafio 1 --- //

/*const defineGeneroDeFilme = prompt("Qual o gênero de filme vocês irão assistir?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

const generoEscolhido = "fantasia";
const valorIngresso = 15; */

if (defineDeGeneroFilme === generoEscolhido && precoIngresso <= valorIngresso) {
  console.log("Bom filme!")
  const snack = prompt("Qual será o lanchinho pro filme?")
  console.log(`Aproveite o seu lanche: ${snack}!`)
} else {
  console.log("Escolha outro filme!")
}

