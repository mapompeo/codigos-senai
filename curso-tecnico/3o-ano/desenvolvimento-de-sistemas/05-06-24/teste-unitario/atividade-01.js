function subtracaoArray(array) {
    let subtracao = 0
    for (let i = 0; i < array.length; i++) {
        subtracao -= array[i];
    }
    return subtracao
}

function somaArray(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma
}

module.exports = { subtracaoArray, somaArray }