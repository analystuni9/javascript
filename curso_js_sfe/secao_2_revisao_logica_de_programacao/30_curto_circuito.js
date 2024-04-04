let n = 0;
if (n === 0) {
    n = 10; // Se o valor de n for exatamente igual a 0, atualize-o para 10
}
console.log(n); // Saída: 10

let n2 = 0;
if (!n2) {
    n2 = 10; // Se n2 for avaliado como falsy (zero neste caso), atualize-o para 10
}
console.log(n2); // Saída: 10 (não 10)

let n3 = undefined;
n3 = n3 || 10; // Se n3 não estiver definido (undefined), atribua 10 a n3
console.log(n3); // Saída: 10

let isValid = true;
if (isValid) {
    console.log('é válido'); // Se isValid for true, imprima 'é válido'
}

isValid && console.log("é válido"); // Se isValid for true, imprima 'é válido'

isValid || console.log("é válido"); // Se isValid for false, imprima 'é válido'

0 && 'hello world'; // Retorna 0 (falso)
0 || 'hello world'; // Retorna 'hello world' (verdadeiro)
let result = true || 'hello world'; // Retorna true (primeiro valor verdadeiro encontrado)
console.log(result); // Saída: true
result = NaN || 'hello world'; // Retorna 'hello world' (verdadeiro)
console.log(result); // Saída: hello world
