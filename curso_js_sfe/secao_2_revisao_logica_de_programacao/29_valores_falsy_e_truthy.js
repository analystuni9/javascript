// Lista de valores que são considerados falsos (falsy values) em JavaScript
// 0, "", NaN, undefined, null, false
// Todos os outros valores são considerados verdadeiros (truthy)

// Verificando se a condição é verdadeira
if (true) {
    console.log('true'); // Este bloco será executado porque a condição é verdadeira
} else {
    console.log('false');
}

// Verificando se a condição é falsa
if (false) {
    console.log('true');
} else {
    console.log('false'); // Este bloco será executado porque a condição é falsa
}

// Verificando se a string 'false' é verdadeira ou falsa
if ('false') {
    console.log('true'); // Este bloco será executado porque a string 'false' não está vazia
} else {
    console.log('false');
}

// Verificando se a string 'texto' é verdadeira ou falsa
if ('texto') {
    console.log('true'); // Este bloco será executado porque a string 'texto' não está vazia
} else {
    console.log('false');
}

// Verificando se NaN é verdadeiro ou falso
if (NaN) {
    console.log('true');
} else {
    console.log('false'); // Este bloco será executado porque NaN é considerado falso
}

// Verificando se undefined é verdadeiro ou falso
if (undefined) {
    console.log('true');
} else {
    console.log('false'); // Este bloco será executado porque undefined é considerado falso
}

// Verificando se uma string vazia ('') é verdadeira ou falsa
if ('') {
    console.log('true');
} else {
    console.log('false'); // Este bloco será executado porque uma string vazia é considerada falsa
}

// Verificando se uma string contendo apenas espaços em branco (' ') é verdadeira ou falsa
if (' ') {
    console.log('true'); // Este bloco será executado porque a string não está vazia
} else {
    console.log('false');
}

// Verificando se o número 1 é verdadeiro ou falso
if (1) {
    console.log('true'); // Este bloco será executado porque 1 é considerado verdadeiro
} else {
    console.log('false');
}
