let vetor1 = [0, 0, 0, 0, 0];
let vetor2 = [0, 0, 0, 0, 0];
let total = [0, 0, 0, 0, 0];
let i = 0;
let s = 0;
let t = 0;

function calculo() {
  let valoresVet1 = Number(document.getElementById("vetorA").value);
  let valoresVet2 = Number(document.getElementById("vetorB").value);

  vetor1[i] = valoresVet1;
  vetor2[s] = valoresVet2;

  total[t] = vetor1[i] + vetor2[s];

  i++;
  s++;
  t++;

  resA.innerHTML = `Vetor A: ${vetor1[0]}, ${vetor1[1]}, ${vetor1[2]}, ${vetor1[3]}, ${vetor1[4]}.`;
  resB.innerHTML = `Vetor B: ${vetor2[0]}, ${vetor2[1]}, ${vetor2[2]}, ${vetor2[3]}, ${vetor2[4]}.`;
  vetorFinal.innerHTML = `A soma dos vetores A + B é o vetor C: ${total[0]}, ${total[1]}, ${total[2]}, ${total[3]}, ${total[4]}.`;
}
