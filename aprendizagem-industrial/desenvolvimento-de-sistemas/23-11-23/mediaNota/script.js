
function calculo() {
    let nome = document.getElementById('nome').value
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let resultado = document.getElementById('resultado')
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 9 ) {
        resultado.innerHTML = `${nome}, sua média foi "${media.toFixed(2)}", portanto sua nota foi A!`
    }
    
    else if (media >= 7.5 && media < 9) {
        resultado.innerHTML = `${nome}, sua média foi "${media.toFixed(2)}", portanto sua nota foi B!`
    }

    else if (media >= 6 && media < 7.5) {
        resultado.innerHTML = `${nome}, sua média foi "${media.toFixed(2)}", portanto sua nota foi C!`
    }

    else if (media >= 4 && media < 6) {
        resultado.innerHTML = `${nome}, sua média foi "${media.toFixed(2)}", portanto sua nota foi D!`
    }

    else if (media < 4) {
        resultado.innerHTML = `${nome}, sua média foi "${media.toFixed(2)}", portanto sua nota foi E!`
    }

    else {
        resultado.innerHTML = `Digite um valor válido!`
    }
}