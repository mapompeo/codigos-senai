let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')
let resposta3 = document.getElementById('resposta3')
let encontrar = document.getElementById('encontrar')
let armazenar = document.getElementById('armazenar')
let valores = []
let arrayDivisivel5 = []
let arrayDivisivel7 = []

armazenar.addEventListener('click', () => {
    resposta.innerHTML = ``
    let divisivel7 = Number(document.getElementById('inputUser').value)

    valores.push(divisivel7)
    resposta.innerHTML = `Os valores inseridos são: ${valores.join(', ')}.`
})

reiniciar.addEventListener('click', () => {
    valores = []
    divisivel = []
    resposta.innerHTML = ``
    resposta2.innerHTML = ``
    resposta3.innerHTML = ``
})

divisivel7.addEventListener('click', () => {
    resposta2.innerHTML = ` `
    for (let i = 0; i < valores.length; i++) {
        if(valores[i] % 7 == 0) {
            arrayDivisivel7.push(valores[i])
        }
    }
    resposta2.innerHTML = `Os valores divisíveis por 7 são: ${arrayDivisivel7.join(', ')}.`
})

divisivel5.addEventListener('click', () => {
    resposta3.innerHTML = ` `
    for (let i = 0; i < valores.length; i++) {
        if(valores[i] % 5 == 0) {
            arrayDivisivel5.push(valores[i])
        }
    }
    resposta3.innerHTML = `Os valores divisíveis por 5 são: ${arrayDivisivel5.join(', ')}.`
})