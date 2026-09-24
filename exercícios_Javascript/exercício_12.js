let notaAluno = [10, 9, 5, 5]
let autoAv = (notas) => notas >= 7

for(const i of notaAluno){
    if(autoAv(i) == true){
        console.log(`Aluno Aprovado!!`)

    }



}