// _Exercício 1_

//1.a) Acessamos os parametros passados na linha de comando através de "process.argv[posicao-do-parametro]"

//1.b)
// const nome =  process.argv[2] 
// const idade = process.argv[3]
// console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

//1.c)
// const nome =  process.argv[2] 
// const idade = process.argv[3]
// const somaIdade = Number(idade) + 7
// console.log(`Olá, ${nome}! Você tem ${idade} anos! Daqui a sete anos você terá ${somaIdade} anos.`)

//_Exercício 2_

// let operacoes = process.argv[2];

// switch (operacoes) {
//     case "add":
//         console.log(Number(process.argv[3]) + Number(process.argv[4]))
//     break;

//     case "sub":
//         console.log(Number(process.argv[3]) - Number(process.argv[4]))
//     break;

//     case "mult":
//         console.log(Number(process.argv[3]) * Number(process.argv[4]))
//     break;

//     case "div":
//         console.log(Number(process.argv[3]) / Number(process.argv[4]))
//     break;    
// }

//_Exercício 3_

let tarefas = "Lavar a Louça";

const adicionaTarefa = (tarefa) => {
    listaAtualizada = [tarefas, tarefa]
    console.log("Nova tarefa adicionada :)")

    return listaAtualizada
}

console.log(adicionaTarefa(process.argv[2]))