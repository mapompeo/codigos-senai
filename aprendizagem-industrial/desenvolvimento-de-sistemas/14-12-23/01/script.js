let vetor = []
let soma = 0

function inserir() {
    let valor = Number(document.getElementById("n1").value)
    let valoresVetor = document.getElementById('valores')
    vetor.push(valor)
    valoresVetor.innerHTML = vetor
}

function verificar() {
    let resultado = document.getElementById('resultado')

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / vetor.length
    resultado.innerHTML = `A média dos valores inseridos é ${media}`
}

function reset() {
    vetor = []
    let valoresVetor = document.getElementById('valores')
    let resultado = document.getElementById('resultado')
    valoresVetor.innerHTML = vetor
    resultado.innerHTML = ``
}


// let somaPar = 0
// let resultado = document.getElementById('resultado')

// for (let i = 0; i < vetor.length; i++) {
//     if (vetor[i] % 2 === 0) {
//         somaPar = somaPar + vetor[i]
//     }
// }

// resultado.innerHTML = `A soma dos valores pares digitados é: ${somaPar}`