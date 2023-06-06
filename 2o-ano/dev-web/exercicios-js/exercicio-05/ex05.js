let vetor = [0,0,0,0,0]
var i = 0
let valores = document.getElementById("valores")

function calculo() {
    let valor = Number(document.getElementById("valor").value)
    let par = 0
    let impares = 0
    
    console.log(valor)

    if (i < 5) {
        vetor[i] = valor
        console.log(vetor[i])
    }

    else if (i > 4) {
        for (s = 0; s <5; s ++) {
            if (vetor[s] % 2 == 0) {
                par = par + vetor[i]
            }
            else {
                impar = impar + vetor[s]
            }
        }
        res1.innerHTML = 'A soma dos números pares é de: ' + par
        res2.innerHTML = 'A soma dos números ímpares é de: ' + impares
    }
    i++

}

    valores.innerHTML = `Valores: ${vetor[0]}, ${vetor[0]}`

    console.log()
}