let resultadoAleatorio = document.getElementById('resultadoAleatorio')
let resultadoPares = document.getElementById('resultadoPares')
let array = []
let arrayFixado = []

function aleatorio() {
    array = [];
    for (let index = 0; index < 10; index++) {
        let resultado = Math.random() * (20 - 0)
        array.push(resultado)
    }
    arrayFixado = array.map(value => Number(value.toFixed(2))) 

    resultadoAleatorio.innerHTML = `Os valores aleatórios gerados são: ${arrayFixado.join(', ')}.`

    return arrayFixado
}

function pares(arrayFixado) {
    let somaPares = 0

    for (let index = 0; index < arrayFixado.length; index++) {
        if (arrayFixado[index] % 2 == 0) {
            somaPares++
        }
    }

    resultadoPares.innerHTML = `A quantidade de valores pares é ${somaPares}`
}
