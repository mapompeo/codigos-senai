let resultado = document.getElementById('resultado')
let precoBolaVolei = 247.58
let precoBolaFutebol = 179.57
let precoBolaBasquete = 260.89
let bolaVolei = 0
let bolaFutebol = 0
let bolaBasquete = 0
let desconto = 0
let valorFinal = 0
let valorFinalComDesconto = 0

finalizar.addEventListener('click', () => {
    let QTDbolaVolei = Number(document.getElementById('bolaVolei').value)
    let QTDbolaFutebol = Number(document.getElementById('bolaFutebol').value)
    let QTDbolaBasquete = Number(document.getElementById('bolaBasquete').value)

    bolaVolei = precoBolaVolei * QTDbolaVolei
    bolaFutebol = precoBolaFutebol * QTDbolaFutebol
    bolaBasquete = precoBolaBasquete * QTDbolaBasquete
    valorFinal = bolaVolei + bolaFutebol + bolaBasquete

    if (valorFinal > 550) {
        desconto = valorFinal * 0.07
        valorFinalComDesconto = valorFinal - desconto
    }

    resultado.innerHTML = `Suas compras deram R$${valorFinal.toFixed(2)}. Seu desconto é de R$${desconto.toFixed(2)} e o valor final com desconto é R$${valorFinalComDesconto.toFixed(2)}.`
})