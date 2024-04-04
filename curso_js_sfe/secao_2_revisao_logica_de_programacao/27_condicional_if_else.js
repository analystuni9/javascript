// Definindo os valores de n1 e n2
let n1 = 6; // Primeiro número
let n2 = 8; // Segundo número

// Calculando a média de n1 e n2
let media = (n1 + n2) / 2; // A soma de n1 e n2 dividida por 2

// Imprimindo a média no console
console.log(`${media}`);

// Calculando e imprimindo o resultado de (3 * 2) ** 2
console.log((3 * 2) ** 2); // Isso resultará em 36 (3 vezes 2 é 6, 6 ao quadrado é 36)

// Verificando as condições para determinar se o aluno foi aprovado ou reprovado
if (n1 === 0 || n2 === 0) { // Se qualquer n1 ou n2 for zero, o aluno está reprovado
    console.log('Reprovado');
} else if (media < 7) { // Se a média for menor que 7, o aluno está reprovado, mas pode ter recuperação
    console.log('Reprovado. Mas há como recuperar');
} else { // Se nenhum dos casos acima, o aluno está aprovado
    console.log('Aprovado');
}

// Imprimindo mensagem fora do bloco if
console.log('Saiu do bloco if');
