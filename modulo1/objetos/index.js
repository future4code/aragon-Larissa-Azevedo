// _Exercícios de Interpretação de Código_ //

/*  ---Exercício 1 ---


console.log(filme.elenco[0]) 
Resposta: será impresso "Matheus Nachtergaele"

console.log(filme.elenco[filme.elenco.length - 1])
Resposta: será impresso "Virginia Cavendish"

console.log(filme.transmissoesHoje[2])
Resposta: será impresso "canal: 'Globo', horario: '14h' "

---Exercício 2 ---

a) console.log(cachorro)
Resposta: será impresso "nome: Juca, idade: 3, raca: SRD"

console.log(gato)
Resposta: será impresso "nome: Juba, idade: 3, raca: SRD"

console.log(tartaruga)
Resposta: será impresso "nome: Jubo, idade: 3, raca: SRD"

b) A sintaxe dos três pontos antes do nome de um objeto é chamada "espalhamento ou spread" que permite que o programador realize uma cópia de objeto ou até
mesmo de um array inteiro manipula-los da maneira que julgar necessário.

--- Exerício 3 ---

a) console.log(minhaFuncao(pessoa, "backender"))
Resposta: false

console.log(minhaFuncao(pessoa, "altura"))
Resposta: undefined

b) Foi acessado um array dentro de um objeto.
O valor "backender" foi definido como "false", por isso o JS assim. imprimiu. 
Já a propriedade altura não foi definida, portanto o JS imprimiu "undefined" no console.

*/

// _Exercícios de Escrita de Código_ //

// --Exercício 1, a/b ---//

const nickname = {
    nome: "Larissa",
    apelido: ["Lari", "Léri","Laris"]
}
function minhaFuncao (parametro) {

    console.log(`Meu nome é ${parametro.nome} mas pode me chamar de ${parametro.apelido[0]}, ${parametro.apelido[1]} ou de ${parametro.apelido[2]}!`)

}

minhaFuncao(nickname)

    const novoNickname = {...nickname,
                        apelido: ["Issa", "Lalinha", "Lá"]}

minhaFuncao(novoNickname)

//---Exercício 2, a---//

const pessoa = {
    nome: "Larissa",
    idade: 28,
    profissao: "Desenvolvedora Iniciante"
}

//---Exercício 2, b---//

const pessoa = {
    nome: "Larissa",
    idade: 28,
    profissao: "Desenvolvedora Iniciante",
}

console.log([pessoa.nome], pessoa.nome.length, pessoa.idade, [pessoa.profissao], pessoa.profissao.length)

//---Exercício 3--//

const carrinho = [ ];


const fruta1 = {
    nome:"Uva",
    disponibilidade: true
}

const fruta2 = {
    nome:"Morango",
    disponibilidade: true
}

const fruta3 = {
    nome: "Melancia",
    disponibilidade: true 
}

function recebeFrutas(fruta) {
carrinho.push(fruta)
}

recebeFrutas(fruta1)
recebeFrutas(fruta2)
recebeFrutas(fruta3)

console.log(carrinho)