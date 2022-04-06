# Fixação JavaScript 2
~~~javascript

function calculaPrecoTotal(quantidade) {
let preco1 = quantidade * 1.3;
let preco2 = quantidade * 1;
let custoTotaldaCompra = []

if (quantidade > 12) {
  custoTotaldaCompra = quantidade * preco1
} else {
  custoTotaldaCompra = quantidade * preco2
}
return custoTotaldaCompra
} 
~~~