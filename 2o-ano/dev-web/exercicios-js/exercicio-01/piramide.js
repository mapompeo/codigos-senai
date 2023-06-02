function calculo(){
    let base = Number(document.getElementById('base').value)
    console.log(base)
    let altura = Number(document.getElementById('altura').value)
    console.log(altura)
    let res = document.getElementById('res')
    
    let total = 0.0

    if (true) {
        total = (base * 2) * altura / 3
    }

    console.log(total)
    res.innerHTML = 'O volume da pirâmide é de ' + total.toFixed(2) + 'cm'
    res.style.color = 'red'
}