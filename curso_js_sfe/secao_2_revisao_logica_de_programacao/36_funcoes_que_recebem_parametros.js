// Função para realizar a adição de dois números
function somar(a, b) {
    return a + b;
}

// Função para realizar a subtração de dois números
function subtrair(a, b) {
    return a - b;
}

// Função para realizar a multiplicação de dois números
function multiplicar(a, b) {
    return a * b;
}

// Função para realizar a divisão de dois números
function dividir(a, b) {
    // Verifica se b é zero para evitar divisão por zero
    if (b === 0) {
        return "Não é possível dividir por zero";
    }
    return a / b;
}

// Exemplo de uso das funções
console.log(somar(7, 9)); // Saída: 16
console.log(subtrair(10, 5)); // Saída: 5
console.log(multiplicar(3, 4)); // Saída: 12
console.log(dividir(10, 2)); // Saída: 5
console.log(dividir(10, 0)); // Saída: "Não é possível dividir por zero"
