// Declarando variáveis de strings usando diferentes tipos de aspas
let variavel = "minha string com aspas duplas";
let variavel2 = 'minha string com aspas simples'; 
var variavel3 = `minha string com template literal`; // Usando template literals com crases

console.log(variavel);

let idade = 40; // Declarando uma variável de número inteiro
let msg = "eu tenho " + idade + " anos"; // Criando uma string usando concatenação de strings
let msg2 = `eu tenho ${idade} anos`; // Criando uma string usando template literals

console.log(msg2); // Imprimindo a mensagem que inclui a idade
console.log("hello " + "world"); // Concatenando duas strings e imprimindo o resultado
console.log(typeof msg); // Imprimindo o tipo da variável msg

const n1 = 10; // Declarando uma constante de número inteiro
const n2 = 1.1; // Declarando uma constante de número decimal

console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1} `); // Imprimindo o tipo e o valor da constante n1
console.log(`o tipo de n2 ${typeof n2} é seu valor é ${n2}`); // Imprimindo o tipo e o valor da constante n2
