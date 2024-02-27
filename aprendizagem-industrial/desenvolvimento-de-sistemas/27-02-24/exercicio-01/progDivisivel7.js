let resposta2 = document.getElementById('resposta2')
let resposta = document.getElementById('resposta')
let encontrar = document.getElementById('encontrar')
let armazenar = document.getElementById('armazenar')

let arrayTotal = []
let arrayDivisivel7 = []

armazenar.addEventListener('click', ()=> {
    resposta.innerHTML = ``
    let divisivel7 = Number(document.getElementById('inputUser').value)

    arrayTotal.push(divisivel7)
    resposta.innerHTML = `Os valores inseridos são: ${arrayTotal.join(', ')}.`
})

encontrar.addEventListener('click', ()=> {
    for (let i = 0; i < arrayTotal.length; i++) {
        if(arrayTotal[i] % 7 == 0) {
            arrayDivisivel7.push(arrayTotal[i])
        }
    }
    resposta2.innerHTML = `Os valores divisíveis por 7 são: ${arrayDivisivel7.join(', ')}.`
})