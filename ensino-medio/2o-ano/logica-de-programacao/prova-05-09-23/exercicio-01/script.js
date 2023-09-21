let array = []

function aleatorio() {
    array = []
    for (let index = 0; 10 > array.length; index++) {
            let valorAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
            array.push(valorAleatorio)
        }
    document.getElementById('resultadoAleatorio').innerHTML = `Os valores gerados são: ${array.join(', ')}.`
}

function verificar() {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    document.getElementById('resultadoMaior').innerHTML = `O maior valor é ${maior}.`
}