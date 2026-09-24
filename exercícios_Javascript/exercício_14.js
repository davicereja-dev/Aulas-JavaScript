let precos = [20, 17, 30, 40]
let sla = function valorCompr(){
let resultado = 0
    for(const total of precos){
        
        resultado = resultado + total
        
    } 
 
    return resultado
} 
console.log(sla())