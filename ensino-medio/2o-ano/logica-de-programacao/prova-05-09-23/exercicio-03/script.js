let array = []

function aleatorio() {
    array = []
    for (let index = 0; 10 > array.length; index++) {
            let valorAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1)
            array.push(valorAleatorio)
        }
    document.getElementById('resultadoAleatorio').innerHTML = `Os valores gerados são: ${array.join(', ')}.`
}

function soma() {
    let par = 0
    let impar = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par = par + array[i]
        }
        else {
            impar = impar + array[i]
        }
    }
    document.getElementById('soma').innerHTML = `A soma dos valores pares é "${par}" e dos impares é "${impar}".`
}