let res = document.getElementById('res');
let vet1_array = [];
let vet2_array = [];
let vetRes = [];

function armazena() {
    vet1_array.push(Number(document.getElementById('vet1').value));
    vet2_array.push(Number(document.getElementById('vet2').value));

    vetora.innerHTML = `Vetor A: ${vet1_array.join(", ")}.`;   
    vetorb.innerHTML = `Vetor B: ${vet2_array.join(", ")}.`;
}

function calculo() {
    for (let i = 0; i < vet1_array.length; i++) {
        vetRes = vet1_array[i] + vet2_array[i];
    }

    res.innerHTML = `A soma dos vetores é: ${vetRes}`
}