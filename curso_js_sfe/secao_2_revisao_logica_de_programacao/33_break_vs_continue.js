// Função para gerar a tabuada usando while, do-while e for
function gerarTabuada() {
    // Solicita ao usuário que insira um número e armazena o valor em 'numero'
    let numero = parseInt(prompt('Digite um número: '));

    let indice = 0; // Inicializa o índice para o loop while

    // Gera a tabuada usando while
    document.write('<h2>Tabuada com While</h2>');
    while (indice <= 10) {
        // Verifica se o índice é igual a 5 e continua para a próxima iteração sem imprimir
        if (indice === 5) {
            indice++;
            continue;
        }
        
        // Imprime a tabuada
        document.write(`${numero} x ${indice} = ${(indice * numero)} <br>`);

        indice++;
    }

    document.write('<p>Saiu do loop while</p>');

    indice = 0; // Reinicia o índice para o loop do-while

    // Gera a tabuada usando do-while
    document.write('<h2>Tabuada com Do-While</h2>');
    do {
        // Verifica se o índice é maior que 10 e exibe um alerta
        if (indice > 10) {
            alert('Alert dentro do if');
        }
        
        // Imprime a tabuada
        document.write(`${numero} x ${indice} = ${(indice * numero)} <br>`);

        indice++;
    } while (indice <= 10);

    document.write('<p>Saiu do loop do-while</p>');

    // Gera a tabuada usando for
    document.write('<h2>Tabuada com For</h2>');
    for (let j = 0; j <= 10; j++) {
        // Verifica se j é igual a 5 e continua para a próxima iteração sem imprimir
        if (j === 5) {
            continue;
        }
        
        // Imprime a tabuada
        document.write(`${numero} x ${j} = ${(j * numero)} <br>`);
    }

    document.write('<p>Saiu do loop for</p>');
}
