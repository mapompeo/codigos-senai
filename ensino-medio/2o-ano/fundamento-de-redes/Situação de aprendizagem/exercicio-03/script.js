let resposta = document.getElementById('resposta')

function calculo() {
    let anos = Number(document.getElementById('anos').value)
    let meses = Number(document.getElementById('meses').value)
    let dias = Number(document.getElementById('dias').value)
    let valorAnos = anos * 365
    let valorMeses = meses * 30
    let valorFinal = valorAnos * valorMeses + dias

    console.log(valorFinal)

    resposta.innerHTML = `Você viveu ${valorFinal} dias!`
}