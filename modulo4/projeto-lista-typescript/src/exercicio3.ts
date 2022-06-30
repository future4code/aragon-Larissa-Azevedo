type Filme = {
    titulo: string
    anoLancamento: number
    genero:string 
    tomatometro?:number

}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const umFilme: Filme = {
    titulo: "Duna",
    anoLancamento: 2021,
    genero:GENERO.ACAO,
    // tomatometro: 74,

}

const outroFilme: Filme = {
    titulo: "Chip'n'Dale: Rescue Rangers",
    anoLancamento: 2022,
    genero:GENERO.COMEDIA,
    tomatometro: 80,

}


function imprimeFichaTecnica(filme:Filme):void {
    console.log(filme)
}

imprimeFichaTecnica(umFilme)
imprimeFichaTecnica(outroFilme)