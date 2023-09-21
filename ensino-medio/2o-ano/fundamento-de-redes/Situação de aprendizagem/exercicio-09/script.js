let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')

function convD() {
    let valorDecimal = Number(document.getElementById("valorD").value)
    let restoD = 0
    let binarioD = '0'

    while (valorDecimal > 0){
        restoD = valorDecimal % 2
        valorDecimal = Math.floor(valorDecimal / 2)
        binarioD = restoD + binarioD
    }
    res1.innerHTML = `O valor em binário é = ${binarioD}`
}

function convB() {
    let valorBinario = document.getElementById("valorB").value
    let decimalB = 0

    for (i = valorBinario.length - 1; i >= 0; i--){
        if (valorBinario[i] === '1'){
            decimalB += Math.pow(2, valorBinario.length - 1 - i)
        }
    }
    res2.innerHTML = `O valor em decimal é = ${decimalB}`
}