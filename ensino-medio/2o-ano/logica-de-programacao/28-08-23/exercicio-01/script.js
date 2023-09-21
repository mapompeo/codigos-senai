let valoresAleatorio = document.getElementById('valoresAleatorio')
let resultadoMedia = document.getElementById('resultadoMedia')
let array = []

function aleatorio(){
    array = []
    for (let index = 0; index < 10; index++) {
        let resultado = Math.floor(Math.random() * (10 - 0))
        array.push(resultado)
    }
    valoresAleatorio.innerHTML = `Os valores aleatórios são: ${array.join(', ')}.`
}

function media() {
    let soma = 0
    for (let index = 0; index < array.length; index++) {
        soma += array[index]
    }
    let resultado = soma / 10
    resultadoMedia.innerHTML = `A média dos valores é: ${resultado}.`
}