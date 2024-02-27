let resultado = document.getElementById('resultado')
let valores = document.getElementById('valores')
let valoresDigitados = []
let valoresPares = 0

visualizar.addEventListener('click', () => {
    valoresDigitados.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
    valores.innerHTML = `Os valores inseridos são: ${valoresDigitados.join(', ')}.`
})

calcular.addEventListener('click', () => {
    valoresPares = 0
    for (let i = 0; i < valoresDigitados.length; i++) {
        if (valoresDigitados[i] % 2 == 0) {
            valoresPares += valoresDigitados[i]
        }
    }
    resultado.innerHTML = `Os valores pares inseridos são: ${valoresPares}.`
})