let array = []

function aleatorio() {
    array = []
    for (let index = 0; 10 > array.length; index++) {
            let valorAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1)
            array.push(valorAleatorio)
        }
    document.getElementById('resultadoAleatorio').innerHTML = `Os valores gerados são: ${array.join(', ')}.`
}

function media() {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i]
    }
    let mediaArray = soma / array.length
    
    document.getElementById('mediaArray').innerHTML = `A média dentre os valores gerados é: ${mediaArray.toFixed(2)}.`
}