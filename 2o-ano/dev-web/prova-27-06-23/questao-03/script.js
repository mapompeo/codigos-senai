let vetor = [0, 0, 0, 0, 0]
let tresEcinco = 0
let tres = 0
let cinco = 0
vetorHTML = document.getElementById("vetorHTML").value

function calculo() {
    let valores = Number(document.getElementById("valores").value)
    
    vetor.push(valores)

    vetorHTML.innerHTML = `Valores: ${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}.`
    for (let i = 0; i < 5; i++) {

        if (vetor[i] % 3 == 0 && vetor[i] % 5 == 0) {
            tresEcinco = tresEcinco + vetor[i]
        }
        else if (vetor[i] % 3 == 0) {
            tres = tres + vetor[i]
        }
        else {
            cinco = cinco + vetor[i]
        }
        i++;

        console.log("vetor")
    }
    
}