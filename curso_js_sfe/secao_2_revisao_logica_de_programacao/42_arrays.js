const arr = new Array(); // Cria um novo array vazio usando o construtor Array
console.log(typeof arr); // Imprime: object

const arr2 = new Array(true, 'Danilo', 28, new Array(1, 2, 3, 4)); // Cria um novo array com valores de tipos diferentes
const arr3 = ['Danilo', 30, [3, 2, 1], true]; // Cria um novo array usando a sintaxe de array literal

arr[0] = 'Danilo'; // Atribui um valor à primeira posição do array arr
arr[1] = 'Brito'; // Atribui um valor à segunda posição do array arr
arr[2] = 30; // Atribui um valor à terceira posição do array arr

arr3[4] = 'novo valor'; // Atribui um valor à quinta posição do array arr3
arr3[arr3.length] = 'novo valor 2'; // Adiciona um novo valor à última posição do array arr3 usando o comprimento do array
arr3.push('adicionado com push'); // Adiciona um novo valor ao final do array arr3 usando o método push()

console.log(arr); // Imprime o array arr
console.log(arr[2]); // Imprime o valor da terceira posição do array arr
console.log(arr2[1]); // Imprime o valor da segunda posição do array arr2
console.log(arr2[3][2]); // Imprime o valor da terceira posição do array interno do array arr2
console.log(arr2[3].length); // Imprime o comprimento do array interno do array arr2
console.log(arr2[3]); // Imprime o array interno do array arr2
console.log(arr3.length); // Imprime o comprimento do array arr3
console.log(arr3); // Imprime o array arr3
