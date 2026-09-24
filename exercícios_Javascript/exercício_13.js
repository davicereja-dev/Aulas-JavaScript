let valorCompra = 160

let valorFrete = (valor) => {
    if(valor > 150){
        console.log("Cobrar Frete!")
    } else {
        console.log("Frete Grátis!")
    }

}
valorFrete(valorCompra)