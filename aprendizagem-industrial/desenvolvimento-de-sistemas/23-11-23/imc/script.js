function calculo() {
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resultado = document.getElementById('resultado')
    let imc = (altura * altura ) / peso

    if (imc < 18.5) {
        resultado.innerHTML = `Abaixo do peso`
    }

    else if (imc >= 18,5 && imc < 25) {
        resultado.innerHTML = `Peso normal`
    }

    else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = `Acima do peso`
    }

    else if (imc > 30) {
        resultado.innerHTML = `Obeso`
    }

    else {
        resultado.innerHTML = `Digite um valor válido`
    }
}