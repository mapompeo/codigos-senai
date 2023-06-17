let vet = [0, 0, 0, 0, 0]
let i = 0

function calculo() {
    let num = Number(document.getElementById("numerosDigitados").value)

    if (num) {
        vet[i] = num;
        i++;
    }

    let maior = Math.max(...vet.slice(0, i)); 
    let menor = Math.min(...vet.slice(0, i));
    //Math.max() e Math.min() juntamente com o operador spread (...) para encontrar o maior e o menor número no vetor vet.

    valoresHTML.innerHTML = `Valores: ${vet[0]}, ${vet[1]}, ${vet[2]}, ${vet[3]}, ${vet[4]}.`;
    resultado.innerHTML = `O maior número digitado é ${maior} e o menor é ${menor}.<br><br>(Atualize a página para recomeçar)`;
}