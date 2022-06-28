//_Exercício 3_

let tarefas = "Lavar a Louça";

const adicionaTarefa = (tarefa) => {
    listaAtualizada = [tarefas, tarefa]
    console.log("Nova tarefa adicionada :)")

    return listaAtualizada
}

console.log(adicionaTarefa(process.argv[2]))