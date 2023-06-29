let totalPar = 0
let totalImpar = 0

function calculo() {
    let valor1 = Number(document.getElementById("valor1").value)
    let valor2 = Number(document.getElementById("valor2").value)
    let valor3 = Number(document.getElementById("valor3").value)
    let valor4 = Number(document.getElementById("valor4").value)
    let valor5 = Number(document.getElementById("valor5").value)

    if (valor1 % 2 == 0 && valor2 % 2 == 0 && valor3 % 2 == 0 && valor4 % 2 == 0 && valor5 % 2 == 0) {
        totalPar = valor1 + valor2 + valor3 + valor4 + valor5
    } else {
        totalImpar = valor1 + valor2 + valor3 + valor4 + valor5
    }

    resultadoPar.innerHTML = `A soma dos números pares digitados é de: ${totalPar}`
    resultadoImpar.innerHTML = `A soma dos números ímpares digitados é de: ${totalImpar}`
}