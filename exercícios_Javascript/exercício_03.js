function verifyEstoque(){
if(estoque <= 5) {
   console.log("estoque crítico")
 } else {
    console.log("estoque normal")
 }
}  estoque = 6
verifyEstoque()