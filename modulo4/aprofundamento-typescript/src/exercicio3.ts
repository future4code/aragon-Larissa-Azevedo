//_Exercício 3_

//Parte 1
//Entradas dessa função são os numeros no parâmetro. Já as saídas são os numeros, passados no parâmetro, de forma ordenada.

type Estatisticas = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([25,50,75]))