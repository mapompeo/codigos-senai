let array = 0

function gerar() {
    array = []
    for (let i = 0; i < 5; i++){
        array.push(Math.floor(Math.random() * (10 - 0 + 1) + 0))
    }
    document.getElementById('arrayResposta').innerHTML = `Os valores aleatórios gerados no array são: ${array.join(', ')}.`
}

function adicionar() {
    soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    soma = soma/array.length
    document.getElementById('mediaResposta').innerHTML = `A média dos valores é: ${soma.toFixed(2)}!`
}