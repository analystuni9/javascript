// Inicializa a variável n1 com o valor "10.234456", uma string representando um número decimal
let n1 = "10.234456";

// Converte a string n1 para um número inteiro usando parseInt(). O resultado é 10, pois parseInt() retorna apenas a parte inteira do número.
n1 = parseInt(n1);

// Inicializa a variável n2 com o valor 2
let n2 = 2;

// Converte o número n2 para uma string usando o método toString(). O argumento 10 especifica a base numérica, que é decimal. Como n2 é 2, a string resultante é "2".
n2 = n2.toString(10);

// Imprime o resultado da concatenação de n1 e n2, seguido dos tipos de n1 e n2, e finalmente o valor de n1.
console.log(n1 + n2, typeof n1, typeof n2, n1);
