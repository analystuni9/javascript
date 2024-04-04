function mostrarTabuada() {
    // Obtém o número digitado pelo usuário
    let numero = parseInt(document.getElementById('numero').value);
    // Obtém a referência ao elemento onde a tabuada será exibida
    let tabuadaElement = document.getElementById('tabuada');
    // Limpa o conteúdo atual da tabuada
    tabuadaElement.innerHTML = '';

    // Cria a tabuada e a adiciona ao elemento HTML
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        let linha = `${numero} x ${i} = ${resultado}<br>`;
        tabuadaElement.innerHTML += linha;
    }
}
function limparTabuada() {
    // Limpa o conteúdo atual da tabuada
    document.getElementById('tabuada').innerHTML = '';
}