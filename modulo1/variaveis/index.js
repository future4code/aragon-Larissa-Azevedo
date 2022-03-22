// Exercícios de interpretação de código //

/* Exercicio 1

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Resposta: No primeiro caso apesar de duas variáveis serem declaradas ('a' e 'b'), apenas uma ('b')será impressa no console.log, portanto será impresso apenas um valor (10).
No segundo caso, a variável 'a' mantém seu valor enquanto o valor de 'b' foi alterado para 5 e o console imprimirá os dois valores, assim serão impressos os valores (10,5).

*

Exercicio 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Resposta: c = a; c = 10; a = 10
          b = c; c = 10; b = 10
          a = b; 10

 Neste exercício verifica-se que 'let' é uma variável cujo valor pode ser atualizado. Logo, ao declarar que c = a e a=10, o valor de 'c' é 10.
 Ao declarar b = c, apesar de inicialmente 'b' ter sido declarado =20, 'b' teve seu valor alterado para 10 por ser declarado igual a 'c' (que ainda não tinha valor);
 Por fim, se a = b, 'a' tem o valor 10 que é igual ao novo valor de 'b'.

 No console será impresso (10, 10, 10)

 *

 Exercicio 3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let valorRecebido = ("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalho/valorRecebido} por hora`)

*/

//Exercícios de escrita de código//

/* Exercicio 1 */

let nome
let idade 

console.log (typeof nome)
console.log (typeof idade)

/* Foi impresso o tipo 'undefinied' porque os valores das variáveis não foram definidos*/

nome = "Larissa"
idade = "28"

console.log (typeof nome)
console.log (typeof idade)

/*Foi impresso o tipo 'string' porque os valores declarados estão entre aspas duplas. Não repeti o 'let' porque essa variável já foi declarada e pode ser atualizada*/

console.log ("Olá" + nome + "," +"você tem" + idade + "anos.")

/* Exercicio 2 */ 

let musica = prompt("Você ouviu música hoje?")
let livro = prompt("Você leu algum livro hoje?")
let descanso = prompt("Você descansou hoje?")

/*Exercicio 3 */

let a = 10
let b = 25

a = b
c = b





