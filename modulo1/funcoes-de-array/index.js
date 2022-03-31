// Exercícios de interpretação de código //

/* ---Exercício 1---

Será impresso no array o seguinte:

{ nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' } ]
{ nome: 'Laís Petra', apelido: 'Laura' } 1 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' } ]


  ---Exercício 2---

  Será impresso no console um novo array somente com os nomes do array original:

  [ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

  ---Exercício 3---

  Será impresso no console um novo array com nomes e apelidos, exceto Chijo.
  [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' } ]

*/

// Exercícios de escrita de código //

// _---Exercício 1, a---_ //

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 const nomePets = pets.map((pet) => {
    return pet.nome
 })
 
 console.log(nomePets)

 // _---Exercício 1, b---_ //

 const salsicha = pets.filter((pet) => {
    return (pet.raca === "Salsicha")
 })
 
 console.log(salsicha)

 // _---Exercício 1, c---_ //

 const nomePoodle = pets.filter((pet) => {
    return (pet.raca === "Poodle")
 })
       
const cupomPoodle = nomePoodle.map((poodle) =>{
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!` 
}                             
)
console.log(cupomPoodle)


 // _---Exercício 2---_ //

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // _---Exercício 2, a---_ //

 const nomeProdutos = produtos.map((produtos) => {
    return produtos.nome
 })
 
 console.log(nomeProdutos)

 // _---Exercício 2, b---_ //
 
 const desconto = produtos.map((produto) => {
    return {
     nome:(produto.nome),
     preco: (produto.preco * 0.95)
    }
}
)
 console.log(desconto)

 // _---Exercício 2, c---_ //
 const categoriaBebidas = produtos.filter((produtos) => {
    return (produtos.categoria === "Bebidas")
 })
 
 console.log(categoriaBebidas)

 // _---Exercício 2, d---_ //
 const produtoYpe = produtos.filter((marcaYpe) => {
    return (marcaYpe.nome.includes("Ypê"))
 })
 
 console.log(produtoYpe)
 
// _---Exercício 2, e---_ //
  const compreYpe = produtoYpe.map((produtoYpe) =>{
    return `Compre ${produtoYpe.nome} por R$ ${produtoYpe.preco}!` 
  }                             
  )
  console.log(compreYpe)

  /// ---Desafio 1, a---///

  const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 
  const nomePokemons = pokemons.map((pokemons) => {
     return pokemons.nome
  })
  
 nomePokemons.sort();
 console.log(nomePokemons)

 /// ---Desafio 1, b---///

 const tipoPokemon = pokemons.map((pokemons) => {
    return pokemons.tipo
 })

const tipoSemRepeticao = [... new Set(tipoPokemon)]

console.log(tipoSemRepeticao)


