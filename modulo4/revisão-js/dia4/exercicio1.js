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

// function geraItensUnicos() {
//     const primeiraLista = [
//         {
//             nome: "Banana"
//         },
//         {
//             nome: "Laranja"
//         }
//     ]
    
//     const segundaLista= [
//         {
//             nome: "Laranja"
//         },
//         {
//             nome: "Cebola"
//         }
//     ]

//     const listaUnica = []

//     if(primeiraLista.nome === segundaLista.nome){
//         return listaUnica.push(primeiraLista, segundaLista)
//     }
    
// }


function geraItensUnicos(primeiraLista, segundaLista) {
    const listaUnificada = primeiraLista.concat(segundaLista);
    for (let i=0; i < listaUnificada.length; i++){
    return listaUnificada}


    let index = listaUnificada.findIndex((value)=>value.nome === value.nome)
    if (index < 0) {return listaUnificada}

}      

// let checaPrimeiraLista = primeiraLista.findIndex((value)=>value.nome === value.nome)
//     let checaSegundaLista = segundaLista.findIndex((value)=>value.nome === value.nome)
//     if (checaPrimeiraLista === checaSegundaLista) {return primeiraLista.concat(segundaLista);}

console.log(geraItensUnicos(primeiraLista, segundaLista))

