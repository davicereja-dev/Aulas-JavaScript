const carrinho = [25.50, 10.00, 100.00, 5.00];
const total = carrinho.reduce((acumulado, valAtual) => acumulado + valAtual, 0);
console.log(total.toFixed(2))