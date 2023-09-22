let total = 0
let basquetePreco = 31.59
let bermudaPreco = 59.49
let tenisPreco = 89.99

function calculo() {
    let basqueteQtd = Number(document.getElementById("basqueteQtd").value)
    let bermudaQtd = Number(document.getElementById("bermudaQtd").value)
    let tenisQtd = Number(document.getElementById("tenisQtd").value)

    total = (bermudaQtd * bermudaPreco) + (basqueteQtd * basquetePreco) + (tenisPreco * tenisQtd)

    if (total >= 200) {
        let = desconto = total % 7
    }

    total = total - desconto

    res.innerHTML = `O valor das compras é de: R$${total}`
    resDesconto.innerHTML = `O valor do desconto é de: R$${desconto}`
}