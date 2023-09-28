function calcula() {
    let preco_cebola = 3.32
    let preco_tomate = 5.35
    let preco_aipim = 2.87
    let preco_batata_inglesa = 4.43
    let preco_cenoura = 3.59
    let preco_chuchu = 1.79
    let total = 0.0

    let res = document.getElementById('res')

    let qt_tomate = Number(document.getElementById('qt_tomate').value)
    console.log(qt_tomate)
    let qt_cebola = Number(document.getElementById('qt_cebola').value) 
    console.log(qt_cebola)
    let qt_aipim = Number(document.getElementById('qt_aipim').value)
    console.log(qt_aipim)
    let qt_batata_inglesa = Number(document.getElementById('qt_batata-inglesa').value)
    console.log(qt_batata_inglesa)
    let qt_cenoura = Number(document.getElementById('qt_cenoura').value)
    console.log(qt_cenoura)
    let qt_chuchu = Number(document.getElementById('qt_chuchu').value)
    console.log(qt_chuchu)

    if(true){
        total = total + (preco_cebola*qt_cebola) + (preco_tomate*qt_tomate) + (preco_aipim*qt_aipim) + (preco_batata_inglesa*qt_batata_inglesa) + (preco_cenoura*qt_cenoura) + (preco_chuchu*qt_chuchu)
    } else {
        console.log('A quantidade de produtos não foi digitada!')
    }

    console.log(total)
    res.innerHTML = 'A soma total é R$' + total.toFixed(2)
    res.style.color = 'yellow'
}