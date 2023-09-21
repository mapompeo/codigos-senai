function calculo () {
    let valor = Number(document.getElementById('inputHTML').value)
    let resultado = document.getElementById('resultado')

    if (valor > 10 && valor < 0) {
        resultado.innerHTML = `Valor fora da faixa de
        cálculo permitida. Valor igual à ${valor}.`
    }
    else {
        let total = ((5 * valor) + 4) / ((2 * valor) + 1)

        resultado.innerHTML = `O resultado da equação é de ${total.toFixed(2)}`
    }

}