let vetor1 = [0, 0, 0, 0, 0, 0, 0];
let i = 0;

function calculo() {
  let valor = Number(document.getElementById("valorhtml").value);
  let soma = 0;

  if (i < 7) {
    vetor1[i] = valor;
    i++;
  } else {
    for (let s = 0; s < 7; s++) {
      soma += vetor1[s];
    }
    resultado.innerHTML = `A soma dos valores internos é de: ${soma}`;
  }

  vetorhtml.innerHTML = `Valores: ${vetor1[0]}, ${vetor1[1]}, ${vetor1[2]}, ${vetor1[3]}, ${vetor1[4]}, ${vetor1[5]}, ${vetor1[6]}.`;
}
