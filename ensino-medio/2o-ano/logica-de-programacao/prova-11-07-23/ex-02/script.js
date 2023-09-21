let total = 0
let kgfValor = 14.2233

function calculo () {
    let cm = Number(document.getElementById('cm').value)
    let kgf = Number(document.getElementById('kgf').value)
    let resultado = document.getElementById('resultado')

    kgf = kgf * kgfValor
    total = kgf / cm;

    resultado.innerHTML = `A perssão é de ${total.toFixed(2)} PSI.`
}