/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo BLACKJACK!")


if(confirm("Quer iniciar uma nova rodada?")) {
   
   let cartaJogador1 = comprarCarta();
   let cartaJogador2 = comprarCarta();

   let cartaComputador1 = comprarCarta();
   let cartaComputador2 = comprarCarta();

   let pontosJogador = cartaJogador1.valor + cartaJogador2.valor
   let pontosComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Suas cartas: ${cartaJogador1.texto + cartaJogador2.texto} = ${pontosJogador} pontos.`)
   console.log(`E as do Computador são: ${cartaComputador1.texto + cartaComputador2.texto} = ${pontosComputador} pontos.`)

   if(pontosJogador > pontosComputador) {
      console.log("Que sorte! Você ganhou!")
   }
   else if(pontosComputador > pontosJogador) {
      console.log("O computador ganhou dessa vez!")
   }
   else if (pontosJogador === pontosComputador){
      console.log("Opa! Empate!")
   }


} else {
	console.log("O jogo acabou!")
}
