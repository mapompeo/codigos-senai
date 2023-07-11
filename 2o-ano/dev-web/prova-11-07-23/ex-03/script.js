let resposta = document.getElementById('resposta')

function calculo () {
    let idade = Number(document.getElementById('idade').value)
    let peso = Number(document.getElementById('peso').value)

    if (idade <= 7) {
        if (peso < 3) {
            resposta.innerHTML = `Não se deve administrar o medicamento.`
        }
        else if (peso >= 3 && peso <= 8) {
            resposta.innerHTML = `Deve se medicar 3 gotas.`
        }
        else if (peso > 8 && peso <= 17) {
            resposta.innerHTML = `Deve se medicar 8 gotas.`
        }
        else if (peso > 17 && peso <= 30) {
            resposta.innerHTML = `Deve se medicar 15 gotas.`
        }
        else if (peso > 30) {
            resposta.innerHTML = `Deve se utilizar outro medicamento.`
        }
    }
    else {
        resposta.innerHTML = `A idade máxima é de 7 anos.`
    }
}