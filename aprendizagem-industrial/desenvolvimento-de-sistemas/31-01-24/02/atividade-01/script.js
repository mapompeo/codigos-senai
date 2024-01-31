let valorFinal = document.getElementById('valorFinal')

function verificar() {
    let gasolinaQtd = Number(document.getElementById('gasolina').value)
    let alcoolQtd = Number(document.getElementById('alcool').value)

    let gasolinaPreco = 5.69
    let alcoolPreco = 5.51

    let combustivelQtd = gasolinaQtd + alcoolQtd

    let precoPorLitroGasolina = gasolinaQtd / gasolinaPreco
    let precoPorLitroAlcool = alcoolQtd / alcoolPreco
    let precoPorLitro = (precoPorLitroAlcool + precoPorLitroGasolina) / 2

    let combustivelFinal =  gasolinaPreco * gasolinaQtd + alcoolPreco * alcoolQtd

    if (combustivelFinal > 25) {
        combustivelFinal = combustivelFinal * 0.3
    }

    valorFinal.innerHTML = `você abasteceu ${combustivelQtd}L. O preço por litro é de R$${precoPorLitro.toFixed(2)}, valor final é de R$${combustivelFina.toFixed(2)}`
}