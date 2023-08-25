let array = []

function inserir() {
    let valorMaximo = Number(document.getElementById('input').value)
    array = []
    for (let index = 0; index < valorMaximo; index++) {
        let resultado = Math.floor(Math.random() * (100 - 0))
        array.push(resultado)
    }
    document.getElementById('array').innerHTML = `Os valores aleatórios são: ${array.join(', ')}.`
}

function resultado() {
    let somaImpares = 0

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 1) {
            somaImpares = somaImpares + array[index]
        }
    }
    document.getElementById('resultadoImpares').innerHTML = `A soma de valores impares é ${somaImpares}.`

    let somaPares = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            somaPares++
        }
    }
    document.getElementById('resultadoPares').innerHTML = `A quantidade de valores pares é ${somaPares}.`

    let total = 0
    for (let index = 0; index < array.length; index++) {
        total = total + array[index]
    }
    document.getElementById('total').innerHTML = `A soma dos valores é ${total}.`
}