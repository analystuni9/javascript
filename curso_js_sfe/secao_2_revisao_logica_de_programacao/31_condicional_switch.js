let diaSemana = 2; // Definindo o dia da semana (0 para domingo, 1 para segunda, etc.)

// Usando uma série de condicionais "if...else if" para determinar o dia da semana e imprimir a mensagem correspondente
if (diaSemana === 0) {
    console.log('Hoje é domingo'); // Se o dia da semana for 0, imprime "Hoje é domingo"
} else if (diaSemana === 1) {
    console.log('Hoje é segunda'); // Se o dia da semana for 1, imprime "Hoje é segunda"
} else if (diaSemana === 2) {
    console.log('Hoje é terça'); // Se o dia da semana for 2, imprime "Hoje é terça"
} else if (diaSemana === 3) {
    console.log('Hoje é quarta'); // Se o dia da semana for 3, imprime "Hoje é quarta"
} else if (diaSemana === 4) {
    console.log('Hoje é quinta'); // Se o dia da semana for 4, imprime "Hoje é quinta"
} else if (diaSemana === 5) {
    console.log('Hoje é sexta'); // Se o dia da semana for 5, imprime "Hoje é sexta"
} else {
    console.log('Hoje é sábado'); // Se o dia da semana for diferente de todos os anteriores, imprime "Hoje é sábado"
}

// Utilizando a estrutura switch para atribuir o nome do dia da semana a uma variável e imprimir a mensagem correspondente
let dia = ""; // Inicializa a variável dia como uma string vazia
switch (diaSemana) { // Avalia o valor de diaSemana
    case 0:
        dia = 'domingo'; // Se diaSemana for 0, atribui "domingo" à variável dia
        break;
    case 1:
        dia = 'segunda'; // Se diaSemana for 1, atribui "segunda" à variável dia
        break;
    case 2:
        dia = 'terça'; // Se diaSemana for 2, atribui "terça" à variável dia
        break;
    case 3:
        dia = 'quarta'; // Se diaSemana for 3, atribui "quarta" à variável dia
        break;
    case 4:
        dia = 'quinta'; // Se diaSemana for 4, atribui "quinta" à variável dia
        break;
    case 5:
        dia = 'sexta'; // Se diaSemana for 5, atribui "sexta" à variável dia
        break;
    case 6:
        dia = 'sábado'; // Se diaSemana for 6, atribui "sábado" à variável dia
        break;
    default:
        dia = "indefinido"; // Se diaSemana não corresponder a nenhum dos casos anteriores, atribui "indefinido" à variável dia
}

console.log(`Hoje é ${dia}`); // Imprime a mensagem com o dia da semana correspondente
