let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let vetor = [0, 0, 0, 0, 0];
var i = 0;
let valores = document.getElementById("valores");

function calculo() {
  let valor = Number(document.getElementById("valor").value);
  let impar = 0;
  let par = 0;

  if (i < 5) {
    vetor[i] = valor;
    i++;
  } else if (i > 4) {
    for (let s = 0; s < 5; s++) {
      if (vetor[s] % 2 == 0) {
        par = par + vetor[s];
      } else {
        impar = impar + vetor[s];
      }
    }
    res1.innerHTML = `A soma dos números pares é de: ${par}`;
    res2.innerHTML = `A soma dos números ímpares é de: ${impar}`;
  }

  valores.innerHTML = `Valores: ${vetor[0]}, ${vetor[1]}, ${vetor[2]}, ${vetor[3]}, ${vetor[4]}`;
}

