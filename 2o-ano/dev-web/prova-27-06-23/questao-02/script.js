let psi = 14.2233

function calculo() {
    let kgf = Number(document.getElementById("kgf").value)

    let resultadoFinal = kgf * psi

    resultado.innerHTML = `O valor inserido é de: PSI ${resultadoFinal}`
}