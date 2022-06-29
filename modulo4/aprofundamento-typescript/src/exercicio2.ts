//_Exercício 2_

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita:string
}

enum corFavorita{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja", 
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AESCURO = "Azul-escuro",
    VIOLETA = "Violeta"
}

const propriedades: Pessoa = {
    nome: "Larissa",
    idade: 28,
    corFavorita:corFavorita.VIOLETA
}



function imprimeObjeto (pessoa: Pessoa) {
    console.log(pessoa)
}

imprimeObjeto(propriedades)