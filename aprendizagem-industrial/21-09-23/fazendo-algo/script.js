let vetor = []

function gerar() {
    vetor = []
    let tamanhoVetor = Number(document.getElementById('tamanhoVetor').value)
    for (let i = 0; i < tamanhoVetor; i++) {
        let aleatorio = Math.floor((Math.random(100 - 1) * 100));
        vetor.push(aleatorio)
    }
    document.getElementById('valores').innerHTML = `Os ${tamanhoVetor} valores gerados são: ${vetor.join(', ')}.`
}

function somar() {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        if (i % 2 == 0) {
            soma += vetor[i]
        }
    }
    document.getElementById('pares').innerHTML = `A soma dos valores pares é: ${soma}.`
} 