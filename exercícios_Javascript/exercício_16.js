let listaVip = (nomesVip) => {
    
    let nomes =["davi","pedro","marcos"]
    for(const buscarNomes of nomes){

        if(buscarNomes == nomesVip){

            return('tudo certo!')

        }
            
    }

    return('tem algo errado!')
        


}   
console.log(listaVip("marcos"))