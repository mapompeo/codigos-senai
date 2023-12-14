function verificar() {
    let resultado = document.getElementById('resultado')
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    let media = (n1 + n2 + n3) / 3


    if (media >= 7) {
        resultado.innerHTML = `Parabéns, você foi aprovado! Sua média é ${media.toFixed(2)}`
    }
    else if (media < 7 && media >= 5) {
        resultado.innerHTML = `Você foi bem, mas deve fazer recuperação! Sua média é ${media.toFixed(2)}`
    }
    else if (media < 7 && media >= 5) {
        resultado.innerHTML = `Você foi bem, mas deve fazer recuperação! Sua média é ${media.toFixed(2)}`
    }
    else if (media < 5) {
        resultado.innerHTML = `Você deve falar com o professor! Sua média é ${media.toFixed(2)}`
    }
    else {
        resultado.innerHTML = `Insira valores positivos!`
    }
}