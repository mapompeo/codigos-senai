let valoresAleatorio = document.getElementById('valoresAleatorio')
let resultadoMedia = document.getElementById('resultadoMedia')
let array = []

function aleatorio(){
    array = []

    for (let index = 0; index < 10; index++) {
        let resultado = Math.random() * (10 - 0)
        array.push(resultado)
    }

    // Código pego na internet para arredondar os valores do vetor para uma casa decimal depois da vírgula
    let decimalPlaces = 1;
    let fixedArray = array.map(value => Number(value.toFixed(decimalPlaces)));
    // --

    valoresAleatorio.innerHTML = `Os valores aleatórios são: ${fixedArray.join(', ')}.`
}

function media() {
    let soma = 0

    for (let index = 0; index < array.length; index++) {
        soma += array[index]
    }
    let resultado = soma / 10

    resultadoMedia.innerHTML = `A média dos valores é: ${resultado.toFixed(2)}.`
}