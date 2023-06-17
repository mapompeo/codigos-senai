let vetor = [0, 0, 0, 0, 0];
let vetorResultado = [0, 0, 0, 0, 0];
let i = 0;

function calculo() {
    let valor = Number(document.getElementById("numeros").value);

    if (valor % 7 === 0) {
        vetorResultado[i] = 0 + 1;
        i++;
    }

    vetor[i] = valor;
    i++;

    let total = vetorResultado[0] + vetorResultado[1] + vetorResultado[2] + vetorResultado[3] + vetorResultado[4];
    
    resultado.innerHTML = `Números: ${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}.`;

    let totalElement = document.getElementById("total");
    totalElement.innerHTML = `A quantidade de números divisíveis por 7 é: ${total}.`;
}
