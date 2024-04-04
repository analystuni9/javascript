const pessoa = {
    nome: 'Danilo',
    idade: 30,
    email: 'danilo@example.com'
};

console.log(pessoa); // Imprime o objeto pessoa

// Loop for...in para iterar sobre as propriedades do objeto pessoa
for (let prop in pessoa) {
    console.log(prop); // Imprime o nome da propriedade
    console.log(pessoa[prop]); // Imprime o valor da propriedade
    console.log(`${prop}: ${pessoa[prop]}`); // Imprime o nome da propriedade e o seu valor
}
