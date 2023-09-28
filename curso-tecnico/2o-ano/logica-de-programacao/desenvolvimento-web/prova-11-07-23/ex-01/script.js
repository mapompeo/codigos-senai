let bolaVoleiValor = 247.58
let bolaFutebolValor = 179.57
let bolaBasqueteValor = 260.89
let precoFinal = document.getElementById('precoFinal')
let total = 0
let desconto = 0

function calculo () {
    let bolaVolei = Number(document.getElementById('bolaVolei').value)
    let bolaFutebol = Number(document.getElementById('bolaFutebol').value)
    let bolaBasquete = Number(document.getElementById('bolaBasquete').value)

    total = (bolaVoleiValor * bolaVolei) + (bolaFutebol * bolaFutebolValor) + (bolaBasquete * bolaBasqueteValor)

    if (total > 550) {
        desconto = total * 8 / 100
        total = total - desconto
        precoFinal.innerHTML = `O valor com desconto é de ${total.toFixed(2)}.`
    }

    precoFinal.innerHTML = `O valor é de ${total.toFixed(2)}`
}