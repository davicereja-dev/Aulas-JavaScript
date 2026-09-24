const dados = (confm) => {
    const confirmados=[];

    for(listaConf of confm){
        confirmados.push(listaConf == true?`confirmado`:`pendente`);
    }

return confirmados


} 
console.log(dados([true, false, true]))