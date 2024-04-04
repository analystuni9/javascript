let paisPresentes = false; // Indica se os pais estão presentes
let comprouBilhete = true; // Indica se a pessoa comprou o bilhete
const idade = 21; // Idade da pessoa

// Verifica se a pessoa pode viajar com base nas condições
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

// Imprime se a pessoa pode viajar
console.log(`Pode viajar: ${podeViajar}`);

// Verifica se a pessoa é maior de idade utilizando operador ternário
let maiorDeIdade = (idade >= 18) ? "true" : "false";

// Se a pessoa não comprou o bilhete, imprime uma mensagem indicando isso
// Caso contrário, imprime se a pessoa é maior de idade ou não
if (!comprouBilhete) {
    console.log('Não comprou o bilhete');
} else {
    console.log(maiorDeIdade);
}
