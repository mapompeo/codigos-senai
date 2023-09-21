let resultadoAleatorio = document.getElementById('resultadoAleatorio')
let resultadoPares = document.getElementById('resultadoPares')
let array = []

function aleatorio() {
    array = [];
    for (let index = 0; index < 10; index++) {
        let resultado = Math.floor(Math.random() * (20 - 0))
        Math.floor(resultado)
        array.push(resultado)
    }
    resultadoAleatorio.innerHTML = `Os valores aleatórios gerados são: ${array.join(', ')}.`
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
