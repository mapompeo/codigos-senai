let resposta = document.getElementById('resposta')

function calculo() {
    let vetor = []
    vetor.push (Number(document.getElementById('n1').value))
    vetor.push (Number(document.getElementById('n2').value))
    vetor.push (Number(document.getElementById('n3').value))

    vetor.sort((a, b) => b - a);

    resposta.innerHTML = `O maior valor digitado é = ${vetor[0]}`
}