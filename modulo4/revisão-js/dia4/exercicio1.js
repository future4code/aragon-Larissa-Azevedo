const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]


function geraItensUnicos(primeiraLista, segundaLista) {
    const listaUnificada = primeiraLista.concat(segundaLista);
    const listaFinal = [];
    
    for (let i=0; i < listaUnificada.length; i++){
        if(listaUnificada ){ //se a lista unificada encontrar nomes repetidos não deve inclui-lo na listaFinal
            //pesquisei métodos de pesquisa mas tive dificuldades para aplicar aqui.

        } listaFinal.push(listaUnificada)
    }
    return listaFinal

}

console.log(geraItensUnicos(primeiraLista, segundaLista))

