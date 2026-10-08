const users = [
    {nome: 'Davi', ativo: false},
    {nome: 'Gabriel', ativo: true},
    {nome: 'Samuel', ativo: true},
    {nome: 'Gustavo', ativo: false},


];

const user_active = users.filter(n => n.ativo == true)
console.log(user_active)





