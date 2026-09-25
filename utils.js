export function saudacao(nome = 'visitante'){
        console.log(`bem vindo ${nome}`)
}   

export const dobro = n => n * 2;

export function formatarMoeda(valor){
    console.log(`o valor é de: R$${valor.toFixed(2).replace(".", ",")}`);
}

export const validarEmail = email => {

        return email.includes("@", ".")


}

export function obtDatInfo() {
    // Instancia uma data real: Ano 2002, Mês 1 (Fevereiro), Dia 12
    let data = new Date(2002, 1, 12);

    // Retorna os dados em formato de array para que nenhum valor seja perdido
    return [
        data.getDate(),          // Retorna 12
        data.getMonth() + 1,     // Retorna 2 (somamos 1 porque Fevereiro é 1 no índice)
        data.getFullYear()       // Retorna 2002
    ];
}