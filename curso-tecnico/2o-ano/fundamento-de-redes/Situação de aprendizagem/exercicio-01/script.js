let resultado = document.getElementById('resposta')

function calculo() {
    let valor = Number(document.getElementById('valor').value)

    if (valor > 0) {
        resultado.innerHTML = `O valor digitado é positivo!`
    }

    else {
        resultado.innerHTML = `O valor digitado é negativo!`
    }
}