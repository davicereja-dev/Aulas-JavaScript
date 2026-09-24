const bonus = (salario) => {
    let gastTotal = 0
for(lista_salario of salario){

    lista_salario < 2000? gastTotal += lista_salario*1.1 : gastTotal += lista_salario;
}
 return gastTotal

}  

 console.log(`o gasto total é: ${bonus([2000,1800,3000])}`)