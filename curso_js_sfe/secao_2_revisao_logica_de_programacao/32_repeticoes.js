// Função para gerar a tabuada manualmente
function gerarTabuadaManual() {
    document.write('<h2>Tabuada Manual</h2>'); // Escreve um título "Tabuada Manual"

    // Solicita ao usuário que insira um número e armazena o valor em 'n'
    let n = prompt('Digite um número: ');

    // Gera a tabuada do número fornecido manualmente para os primeiros 10 múltiplos
    document.write(`${n} x 1 = ${(1 * n)}<br>`); // Escreve o primeiro múltiplo da tabuada
    document.write(`${n} x 2 = ${(2 * n)}<br>`); // Escreve o segundo múltiplo da tabuada
    document.write(`${n} x 3 = ${(3 * n)}<br>`); // Escreve o terceiro múltiplo da tabuada
    document.write(`${n} x 4 = ${(4 * n)}<br>`); // Escreve o quarto múltiplo da tabuada
    document.write(`${n} x 5 = ${(5 * n)}<br>`); // Escreve o quinto múltiplo da tabuada
    document.write(`${n} x 6 = ${(6 * n)}<br>`); // Escreve o sexto múltiplo da tabuada
    document.write(`${n} x 7 = ${(7 * n)}<br>`); // Escreve o sétimo múltiplo da tabuada
    document.write(`${n} x 8 = ${(8 * n)}<br>`); // Escreve o oitavo múltiplo da tabuada
    document.write(`${n} x 9 = ${(9 * n)}<br>`); // Escreve o nono múltiplo da tabuada
    document.write(`${n} x 10 = ${(10 * n)}<br>`); // Escreve o décimo múltiplo da tabuada
}

// Função para gerar a tabuada usando um loop while
function gerarTabuadaLoop() {
    document.write('<h2>Tabuada com Loop</h2>'); // Escreve um título "Tabuada com Loop"

    // Solicita ao usuário que insira um número e armazena o valor em 'n2'
    let n2 = parseInt(prompt('Digite um número: '));

    // Verifica se o usuário inseriu um número válido
    if (!isNaN(n2)) { // isNaN() verifica se o valor não é um número
        let indice = 0; // Inicializa um contador

        // Loop enquanto o 'indice' for menor ou igual a 10
        while (indice <= 10) {
            // Imprime o resultado da multiplicação do 'n2' pelo 'indice' atual
            document.write(`${n2} x ${indice} = ${(n2 * indice)}<br>`); 
            indice++; // Incrementa o 'indice' para avançar para o próximo múltiplo
        }
    } else {
        document.write('Você não inseriu um número válido.'); // Exibe uma mensagem se o usuário não inserir um número válido
    }
}