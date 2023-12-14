let valoresAteDigitado = []

function verificar() {
    valoresAteDigitado = []
    let resultado = document.getElementById('resultado')
    let numeroDigitado = Number(document.getElementById("inputUser").value)
    let soma = 0

    if (numeroDigitado >= 20 && numeroDigitado <= 1) {
        resultado.innerHTML = `Número inválido. Digite novamente!`
    }

    else {
        for (let i = 0; i <= numeroDigitado; i++) {
            valoresAteDigitado.push(i)
        }

        for (let i = 0; i < valoresAteDigitado.length; i++) {
            if (i % 2 != 0) {
                soma = soma + i
            }
        }
        
        resultado.innerHTML = `A soma dos valores ímpares até o número digitado é: ${soma.toFixed(2)}.`
    }
}