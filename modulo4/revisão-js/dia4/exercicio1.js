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
    for (let i=0; i < listaUnificada.length; i++){
    return listaUnificada}

}      

    console.log(geraItensUnicos(primeiraLista, segundaLista))