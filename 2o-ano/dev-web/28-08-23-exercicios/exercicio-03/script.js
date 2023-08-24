let input = document.getElementById('input')
let resultadoPares = document.getElementById('resultadoPares')
let array = []

function inserir() {
    let erro = document.getElementById('erro')
    let vetor = document.getElementById('vetor')

    if (array.length >= 0 || array.length < 6) {
        if(input > 0 || input <= 10) {
            array.join(input)
            vetor.innerHTML = `Os valores inseridos são: ${array.join(', ')}.`
        } 
    }
    else {
        erro.innerHTML = `Insira um número entre 0 e 10!`
    }
}

function pares() {
    let somaPares = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            somaPares++
        }
    }
    resultadoPares.innerHTML = `A quantidade de valores pares é ${somaPares}`
}
