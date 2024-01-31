let valorHTML = document.getElementById('valorHTML')

function finalizar() {
    let bermudaQtd = Number(document.getElementById('bermuda').value)
    let camisetaQtd = Number(document.getElementById('camiseta').value)
    let tenisQtd = Number(document.getElementById('tenis').value)

    let bermuda = 35
    let camiseta = 40
    let tenis = 175

    let descBermuda = 0
    let descCamiseta = 0
    let descTenis = 0

    if (bermudaQtd > 3) {
        descBermuda = (bermuda * bermudaQtd * 0.1)
    }

    else if (camisetaQtd > 3) {
        descCamiseta = (camiseta * camisetaQtd * 0.1)
    }

    else if (tenisQtd > 3) {
        descTenis = (tenis * tenisQtd * 0.1)
    }

    let precoFinal = (bermuda * bermudaQtd - descBermuda) + (camiseta * camisetaQtd - descCamiseta) + (tenis * tenisQtd - descTenis)
    let descontoFinal = descBermuda + descCamiseta + descTenis

    valorHTML.innerHTML = `Seu desconto é de R$${descontoFinal}. O valor final da compra é de R$${precoFinal}`
}