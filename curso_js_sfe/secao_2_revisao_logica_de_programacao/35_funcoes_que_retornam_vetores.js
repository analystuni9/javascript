// Definição de uma função chamada 'obtemDiaSemana'
function obtemDiaSemana() {
    // Retorna o número do dia da semana atual utilizando o método 'getDay()' da classe 'Date'
    return new Date().getDay();
}

// Chama a função 'obtemDiaSemana' e armazena o resultado na variável 'dia'
let dia = obtemDiaSemana();

// Imprime o número do dia da semana no console
console.log(dia);
