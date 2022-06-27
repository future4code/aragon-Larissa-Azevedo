// _Exercício 1_

//1.a) Acessamos os parametros passados na linha de comando através de "process.argv[posicao-do-parametro]"

//1.b)
 const nome =  process.argv[2] 
 const idade = process.argv[3]
//  console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

//1.c)
// const outroNome =  process.argv[2] 
// const outraIdade = process.argv[3]
const somaIdade = Number(idade) + 7
console.log(`Olá, ${nome}! Você tem ${idade} anos! Daqui a sete anos você terá ${somaIdade} anos.`)