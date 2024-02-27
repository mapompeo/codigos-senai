let div3 = document.getElementById('divisivel3')
let div5 = document.getElementById('divisivel5')
let div3e5 = document.getElementById('divisivel3e5')
let valores = document.getElementById('valores')
let valoresGerados = []
let divisivel3 = []
let divisivel5 = []
let divisivel3e5 = []

visualizar.addEventListener('click', () => {
    valoresGerados = []
    valoresGerados.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
    valores.innerHTML = `Os valores inseridos são: ${valoresGerados.join(', ')}.`
})

calcular.addEventListener('click', () => {
    for (let i = 0; i < valoresGerados.length; i++) {
        if (valoresGerados[i] % 3 == 0) {
            divisivel3.push(valoresGerados[i])
        }
    }

    for (let i = 0; i < valoresGerados.length; i++) {
        if (valoresGerados[i] % 5 == 0) {
            divisivel5.push(valoresGerados[i])
        }
    }

    for (let i = 0; i < valoresGerados.length; i++) {
        if (valoresGerados[i] % 5 == 0 && valoresGerados[i] % 3 == 0) {
            divisivel3e5.push(valoresGerados[i])
        }
    }

    div3.innerHTML = `Os valores divisíveis por 3 são: ${divisivel3.join(', ')}.`
    div5.innerHTML = `Os valores divisíveis por 5 são: ${divisivel5.join(', ')}.`
    div3e5.innerHTML = `Os valores divisíveis por 3 e 5 são: ${divisivel3e5.join(', ')}.`
})