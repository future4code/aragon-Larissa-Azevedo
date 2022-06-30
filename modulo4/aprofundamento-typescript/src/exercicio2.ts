//_Exercício 2_

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita:string
}

enum coresArcoIris{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja", 
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZUL_ESCURO = "Azul-escuro",
    VIOLETA = "Violeta"
}

const propriedades: Pessoa = {
    nome: "Larissa",
    idade: 28,
    corFavorita:coresArcoIris.VIOLETA
}



function imprimeObjeto (pessoa: Pessoa) {
    console.log(pessoa)
}

imprimeObjeto(propriedades)