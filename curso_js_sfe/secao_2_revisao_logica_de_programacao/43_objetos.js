const nomes = ['Joao', 'Maria', 'Zezinho']; // Cria um array de nomes
const idades = [21, 22, 23]; // Cria um array de idades
console.log(nomes[0], idades[0]); // Imprime o primeiro nome e a primeira idade

const pessoa1 = new Object(); // Cria um novo objeto usando o construtor Object
const pessoa2 = { // Cria um novo objeto usando a sintaxe de objeto literal
    nome: 'Danilo', // Atribui um valor à propriedade 'nome'
    idade: 30, // Atribui um valor à propriedade 'idade'
};

let prop1 = 'nome'; // Declara uma variável com o nome da propriedade
let prop2 = 'idade'; // Declara uma variável com o nome da propriedade

pessoa1.nome = 'Danilo'; // Atribui um valor à propriedade 'nome' do objeto pessoa1
pessoa1.idade = 30; // Atribui um valor à propriedade 'idade' do objeto pessoa1

console.log(pessoa1); // Imprime o objeto pessoa1
console.log(pessoa1.nome); // Imprime o valor da propriedade 'nome' do objeto pessoa1
console.log(pessoa1.idade); // Imprime o valor da propriedade 'idade' do objeto pessoa1
console.log(pessoa1[prop1]); // Imprime o valor da propriedade 'nome' do objeto pessoa1 usando uma variável
console.log(pessoa1[prop2]); // Imprime o valor da propriedade 'idade' do objeto pessoa1 usando uma variável
console.log(pessoa2); // Imprime o objeto pessoa2
