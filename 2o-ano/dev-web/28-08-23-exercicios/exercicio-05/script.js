let resultadoRandomize = document.getElementById('resultadoRandomize')
let resultadoVerify = document.getElementById('resultadoVerify')
let arrayRandomize = []

function create(minimo, maximo){ 
    let resultadoRandom = Math.random() * (maximo - minimo + 1) + minimo
    return resultadoRandom
}

function randomize(){
    arrayRandomize = []
    let minimo = 1.4
    let maximo = 2.1

    for (let index = 0; index < 9; index++) {
        let resultado = create(minimo, maximo)
        arrayRandomize.push(resultado)
    }
    resultadoRandomize.innerHTML = `As ${arrayRandomize.length} alturas aleatórias são = ${arrayRandomize.join(', ')}.`
}

function verify(){
    let baixo = 0
    let medio = 0
    let alto = 0

    for (let index = 0; index < arrayRandomize.length; index++) {
        if (arrayRandomize[index] < 1.60) {
            baixo++
        } else if (arrayRandomize[index] >= 1.60 && arrayRandomize[index] < 1.86) {
            medio++
        } else {
            alto++
        }
    }

    resultadoVerify.innerHTML = `A quantidade de alturas baixas é ${baixo}, alturas ${medio} médias  e ${alto} altas.`
}
