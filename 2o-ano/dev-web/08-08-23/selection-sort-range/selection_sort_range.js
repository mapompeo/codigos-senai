let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let num_array = []
let minimo = 0

function randomize(min, max) {
    let valor = 0
    valor = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(valor)
    return valor
}

function inserir() {
    let insert = Number(document.getElementById('insert').value)
    let maximo = insert
    let resposta = 0

    for (let index = 0; index < 5; index++) {
        randomize(minimo, maximo)
        num_array.push(resposta)
    }
    console.log(`Resposta = ${resposta}`)
}

function ordenar() {
    
}