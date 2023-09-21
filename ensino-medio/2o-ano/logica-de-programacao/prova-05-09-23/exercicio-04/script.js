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
    let menor = 50
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor && array[i] % 2 === 0) {
            menor = array[i]
        }
    document.getElementById('resultadoMaior').innerHTML = `O menor valor par é: ${menor}.`
    }
}