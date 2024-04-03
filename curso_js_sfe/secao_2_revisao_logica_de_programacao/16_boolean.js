// Declarando variáveis de strings usando diferentes tipos de aspas
let variavel = "minha string com aspas duplas";
let variavel2 = 'minha string com aspas simples';
var variavel3 = `minha string com template literal`;

console.log(variavel);

let idade = 40; // Declarando uma variável de número inteiro
let msg = "eu tenho " + idade + " anos"; // Criando uma string usando concatenação de strings
let msg2 = `eu tenho ${idade} anos`; // Criando uma string usando template literals

console.log(msg); // Imprimindo a mensagem que inclui a idade
console.log(msg2); // Imprimindo a mensagem que inclui a idade usando template literals
console.log("hello " + "world"); // Concatenando duas strings e imprimindo o resultado
console.log(typeof msg); // Imprimindo o tipo da variável msg

const n1 = 10; // Declarando uma constante de número inteiro
const n2 = 1.1; // Declarando uma constante de número decimal

console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1} `); // Imprimindo o tipo e o valor da constante n1
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`); // Imprimindo o tipo e o valor da constante n2

// Boolean pode ter apenas dois valores: true ou false
const isValid = true;
console.log(`isValid: ${isValid}`); // Imprimindo o valor da variável booleana

let test = null; // Declarando uma variável e atribuindo o valor null
console.log(test); // Imprimindo null
console.log(typeof test); // Imprimindo o tipo da variável test (null)

test = 10; // Atribuindo um novo valor à variável test
console.log(typeof test); // Imprimindo o tipo da variável test (number)
