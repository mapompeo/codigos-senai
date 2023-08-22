let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array = []

function randomize(minimo, maximo) {
    let resultadoRandom = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    return resultadoRandom
}

function inserir() {
    num_array = []
    let minimo = 0
    let maximo = Number(document.getElementById('insert').value)

    for (let index = minimo; index < maximo; index++) {
        let resultado = randomize(minimo, maximo)
        num_array.push(resultado)
    }
    res.innerHTML = `Os ${maximo} números aleatórios são = ${num_array.join(', ')}.`
}

function ordenar() {
    let valor_atual = 0

    for (let index = 0; index < num_array.length; index++) {
        let menor = index
        for (j = index + 1; j < num_array.length; j++){
            if (num_array[j] < num_array[menor]){
                menor = j
            }
        }
        if (i != menor) {
            valor_atual = num_array[i]
            num_array[i] = num_array[menor]
            num_array[menor] = valor_atual
        }
    }
    res2.innerHTML = `Os valores ordenados por ordem decrescente utilizando o método "selection.sort" são: ${num_array}.`
}