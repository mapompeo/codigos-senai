let vetor = []
let div3e5 = 0
let div3 = 0
let div5 = 0
let i = 0

function calculo() {
    let valor = Number(document.getElementById("valores").value)

    if(i < 5){
        vetor[i] = valor
    }

    else if (i == 5){  
        for(indice = 0; indice < 5; indice++){

            if(vetor[indice] % 3 == 0 && vetor[indice] % 5 == 0){
            div3e5 = div3e5 + 1          
            }

            if(vetor[indice] % 3 == 0){
                div3 = div3 + 1          
            }
            if(vetor[indice] % 5 == 0){
                div5 = div5 + 1          
            }

        }
    div3e5HTML.innerHTML = `${div3e5} Números são divisíveis por 3 e 5.`
    div3HTML.innerHTML = `${div3} Números são divisíveis por 3.`
    div5HTML.innerHTML = `${div5} Números são divisíveis por 5.`
    }

    i++;

    vetorHTML.innerHTML = `Valores: ${vetor.join(", ")}.`
}