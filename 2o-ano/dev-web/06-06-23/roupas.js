function calcula_preco() {
    let qtde_cam = Number(document.getElementById('qtde_cam').value)
    let qtde_berm = Number(document.getElementById('qtde_berm').value)
    let qtde_cal = Number(document.getElementById('qtde_cal').value)
    console.log(qtde_cam)
    console.log(qtde_berm)
    console.log(qtde_cal)

    let preco_cam = 29.95
    let preco_berm = 34.87
    let preco_cal = 92.39
    let total = 0.0

    total = (qtde_cam * preco_cam) + (qtde_berm * preco_berm) + (qtde_cal * preco_cal)
    res.innerHTML = "O valor das compras é de R$" + total.toFixed(2)

}