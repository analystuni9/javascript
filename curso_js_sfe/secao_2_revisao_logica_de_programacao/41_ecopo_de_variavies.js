let n = 'global';

function mostrar() {
    let n = 'local function';
    var n2 = 'local var';
    console.log(n); // Imprime: local function

    if (true) {
        let n = 'local if';
        console.log(n); // Imprime: local if
    }

    if (true) {
        console.log(n2); // Imprime: local var
    }
}

mostrar(); // Chamada da função mostrar()
console.log(n); // Imprime: global

function externa() {
    let n = 'externa';

    function interna() {
        let n = 'interna';
        console.log(n); // Imprime: interna
    }

    console.log(n); // Imprime: externa
    interna(); // Chamada da função interna()
}

externa(); // Chamada da função externa()
