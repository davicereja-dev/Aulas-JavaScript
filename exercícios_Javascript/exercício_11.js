let giros = 3; // Variável vai guarda o valor atual

// Arrow function que recebe um número e retorna ele menos 1
let roleta = (atual) => atual - 1;

do {
    console.log("Girando roleta.");
    
    // Atualizamos a variável com o resultado da arrow function
    giros = roleta(giros); 
} while (giros >= 1);