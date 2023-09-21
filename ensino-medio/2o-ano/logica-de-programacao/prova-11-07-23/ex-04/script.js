let primeiro = document.getElementById('primeiro')
let segundo = document.getElementById('segundo')
let terceiro = document.getElementById('terceiro')

function calculo () {
    let primeiroNumero = Number(document.getElementById('primeiroNumero').value)
    let segundoNumero = Number(document.getElementById('segundoNumero').value)
    let terceiroNumero = Number(document.getElementById('terceiroNumero').value)

    if (primeiroNumero % 7 == 0 && primeiroNumero % 5 == 0) {
        primeiro.innerHTML = `O primeiro valor digitado é divisível por 5 e 7. Valor igual à ${primeiroNumero}.`
    }
    else if (primeiroNumero % 5 == 0) {
        primeiro.innerHTML = `O primeiro valor digitado é divisível por 5. Valor igual à ${primeiroNumero}.`
    }
    else if (primeiroNumero % 7 == 0) {
        primeiro.innerHTML = `O primeiro valor digitado é divisível por 7. Valor igual à ${primeiroNumero}.`
    }
    else {
        primeiro.innerHTML = `O valor não é divisível por 5 e 7.`
    }

    if (segundoNumero % 7 == 0 && segundoNumero % 5 == 0) {
        segundo.innerHTML = `O primeiro valor digitado é divisível por 5 e 7. Valor igual à ${segundoNumero}.`
    }
    else if (segundoNumero % 5 == 0) {
        segundo.innerHTML = `O primeiro valor digitado é divisível por 5. Valor igual à ${segundoNumero}.`
    }
    else if (segundoNumero % 7 == 0) {
        segundo.innerHTML = `O primeiro valor digitado é divisível por 7. Valor igual à ${segundoNumero}.`
    }
    else {
        segundo.innerHTML = `O valor não é divisível por 5 e 7.`
    }

    if (terceiroNumero % 7 == 0 && terceiroNumero % 5 == 0) {
        terceiro.innerHTML = `O primeiro valor digitado é divisível por 5 e 7. Valor igual à ${terceiroNumero}.`
    }
    else if (terceiroNumero % 5 == 0) {
        terceiro.innerHTML = `O primeiro valor digitado é divisível por 5. Valor igual à ${terceiroNumero}.`
    }
    else if (terceiroNumero % 7 == 0) {
        terceiro.innerHTML = `O primeiro valor digitado é divisível por 7. Valor igual à ${terceiroNumero}.`
    }
    else {
        terceiro.innerHTML = `O valor não é divisível por 5 e 7.`
    }

}