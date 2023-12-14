let vetor = []

function inserir() {
    let valor = Number(document.getElementById("n1").value)
    let valoresVetor = document.getElementById('valores')

    if (vetor.length < 10) {
        vetor.push(valor)
        valoresVetor.innerHTML = vetor
    }

    else {
        resultado.innerHTML = `Você não pode armazenar mais valores!`
    }
}

function verificar() {
    let somaPar = 0
    let resultado = document.getElementById('resultado')

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            somaPar += vetor[i]
        }
    }
    
    resultado.innerHTML = `A soma dos valores pares digitados é: ${somaPar}`
}

function reset() {
    vetor = []
    let valoresVetor = document.getElementById('valores')
    let resultado = document.getElementById('resultado')
    valoresVetor.innerHTML = vetor
    resultado.innerHTML = ``
}