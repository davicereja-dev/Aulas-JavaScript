const produt = [{ nome:'mesa', preco: 100 }, {nome:'cadeira' , preco: 50}];
const promo = produt.map(produto => produto.preco-produto.preco*0.10)

let produtoPromo = []

let posicao = 0

    for(const produto of produt){

            produtoPromo.push({...produto, preco: promo[posicao]}) 
            
            
                posicao++

    }

    console.log(produtoPromo)