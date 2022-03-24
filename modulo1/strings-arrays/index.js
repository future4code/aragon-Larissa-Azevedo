//_Exercícios de interpretação de código_//

/* -Exercicio 1-

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

--Resposta: a) undefinied
b) null
c) 11
d) 3
e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] - atribui novo valor do índice 0+1
f) 9

-Exercicio 2-

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

o resultado impresso seria: SUBI NUM ÔNIBUS EM MIRROCOS, 27

*/

//_Exercicios de escrita de código_//

// - Exercicio 1 - //

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// - Exercicio 2 - //

array = comidasPreferidas = ["lasanha", "pipoca", "nhoque", "sorvete", "café"]

let i = 0
  
console.log('a.', array)

console.log ('b. ', `Essas são minhas comidas preferidas:`)
console.log(array [i])
console.log(array [i+1])
console.log(array [i+2])
console.log(array [i+3])
console.log(array [i+4])

const preferidaDoUsuario = prompt("Qual é a sua comida preferida?")
array[i+1] = preferidaDoUsuario

console.log ('c. ', array [i])
console.log(array [i+1])
console.log(array [i+2])
console.log(array [i+3])
console.log(array [i+4])

// - Exercicio 3 - //

let listaDeTarefas = []
const tarefasUsuario1= prompt("Qual a primeira tarefa para realizar hoje?")
const tarefasUsuario2= prompt("Qual a segunda  tarefa para realizar hoje?")
const tarefasUsuario3= prompt("Qual a terceira tarefa para realizar hoje?")

const adicionarPrimeiraTarefa= listaDeTarefas.push(tarefasUsuario1)
const adicionarSegundaTarefa= listaDeTarefas.push(tarefasUsuario2)
const adicionarTerceiraTarefa= listaDeTarefas.push(tarefasUsuario3)

console.log(listaDeTarefas)

const indiceUsuario = Number(prompt("Digite um índice de 0 a 2:"))
listaDeTarefas.splice(indiceUsuario,1)
console.log(listaDeTarefas)


// Desafio 1 //

let frase= "O rato roeu a roupa do rei de Roma";
let cadaElemento = frase.split(" ", 9);
console.log(cadaElemento);


// Desafio 2 //
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.indexOf ("Abacaxi"), frutas.length)



                    