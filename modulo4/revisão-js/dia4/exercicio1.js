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

    console.log(listaUnificada.nome) //não consigo acessar o nome, retorna undefined
    
    for (let i=0; i < listaUnificada.length; i++){
        if(listaUnificada.find(element => element === listaUnificada.nome)){ //se a lista unificada encontrar nomes repetidos não deve inclui-lo na listaFinal
            //pesquisei métodos de pesquisa e outros para evitar duplicação mas tive dificuldades para aplicar aqui.
            listaFinal.push(listaUnificada)
        } 
    }
    return listaFinal

}

console.log(geraItensUnicos(primeiraLista, segundaLista))

