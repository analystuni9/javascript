// Operadores lógicos
// Para uma pessoa viajar para o exterior:
// Precisa ser maior de 18 anos?
// ou 
// Acompanhado dos pais
// ter comprado o bilhete

// Definindo as variáveis
let idade = 21; // Idade da pessoa
let paisPresentes = true; // Indica se os pais estão presentes
let comprouBilhete = false; // Indica se a pessoa comprou o bilhete

// Condição para determinar se a pessoa pode viajar
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete);

// Imprimindo o resultado
console.log(`Pode viajar? ${podeViajar}`);
