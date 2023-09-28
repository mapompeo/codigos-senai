let array = 0

function gerar() {
    array = []
    for (let i = 0; i < 5; i++){
        array.push(Math.floor(Math.random() * (10 - 0 + 1) + 0))
    }
    document.getElementById('arrayResposta').innerHTML = `Os valores aleatórios gerados no array são: ${array.join(', ')}.`
}

function soma() {
    pares = 0
    impares = 0 
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares += array[i]
        }
        else {
            impares += array[i]
        }
    }
    document.getElementById('paresResultado').innerHTML = `A soma dos valores é pares é: ${pares.toFixed(2)}!`
    document.getElementById('imparesResultado').innerHTML = `A soma dos valores é impares é: ${impares.toFixed(2)}!`

}