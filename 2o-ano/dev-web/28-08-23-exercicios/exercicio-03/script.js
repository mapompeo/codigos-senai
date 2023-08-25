let resultadoImpares = document.getElementById('resultadoImpares')
let erro = document.getElementById('erro')
let vetor = document.getElementById('vetor')
let array = []

function apertado() {
    if (event.key === 'Enter') {
      inserir();
    }
}

function inserir() {
    let input = Number(document.getElementById('input').value)

    if (input >= 0 && input <= 10) {
        if (array.length < 6) {
            array.push(input);
            vetor.innerHTML = `Os valores inseridos são: ${array.join(', ')}.`
            erro.innerHTML = ''; // Limpar a mensagem de erro se estiver visível
        } else {
            erro.innerHTML = 'Você já inseriu o número máximo de valores.'
        }
    } else {
        erro.innerHTML = 'Insira um número entre 0 e 10!'
    }
}

function impares() {
    let somaImpares = 0

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 1) {
            somaImpares = somaImpares + array[index]
        }
    }
    resultadoImpares.innerHTML = `A soma de valores impares é ${somaImpares}.`
}