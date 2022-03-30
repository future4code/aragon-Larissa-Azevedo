// _Exercícios de interpretação de código_ //

/* ---Exercício 1---
a) O código irá incrementar o valor enquanto este for menor que 5 e o resultado impresso no console será 10.


---Exercício 2---

a) Serão impressos os números maiores que 18, ou seja: 19, 21, 23, 25, 27, 30
b)

--- Exercício 3---
O resultado impresso no console seria:

*
**
***
****

*/

//Exercício escrita de código//

//---Exercício 1---//

let quantidadePet = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nenhum = quantidadePet === 0
let tenho = quantidadePet > 0
let nomes = [ ]

if (nenhum){
    console.log("Que pena! Você pode adotar um bichinho!")
}

else if (tenho) {
  for(let i = 0; i < quantidadePet; i++ )
  nomes.push(prompt("Qual(is) o(s) nome(s) do(s) seu(s) bichinho(s)?"))
  
  console.log(nomes)
}


//---Exercício 2, a---//

const numeros = [22, 11, 19, 93, 28]

for (let i = 0;i < numeros.length; i++){
  console.log(i, (numeros[i]))
}

//---Exercício 2, b---//
const numeros = [22, 11, 19, 93, 28]
 
for (let i = 0;i < numeros.length; i++){
 console.log(i, (numeros[i]/10))
}

//---Exercício 2, c---//
const numeros = [22, 11, 19, 93, 28]
const numerosPares = [ ]

for (let i = 0;i < numeros.length; i++){
      if  (numeros[i] %2===0) {
        numerosPares.push(numeros[i])
      }
}
   console.log(numerosPares)