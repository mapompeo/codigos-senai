let resultado = document.getElementById('resultado')

function binario() {
    let input = Number(document.getElementById('input').value)
    let resultadoBinario = parseInt(input, 10)
    let resB = resultadoBinario.toString(2)

    resultado.innerHTML = `O número convertido em binário é = ${resB}`
}

function octal() {
    let input = Number(document.getElementById('input').value)
    let resultadoOctal = parseInt(input, 10)
    let resB = resultadoOctal.toString(8)

    resultado.innerHTML = `O número convertido em octal é = ${resB}`
}

function hexadecimal() {
    let input = Number(document.getElementById('input').value)
    let resultadoHexadecimal = parseInt(input, 10)
    let resB = resultadoHexadecimal.toString(16)

    resultado.innerHTML = `O número convertido em hexadecimal é = ${resB}`
}