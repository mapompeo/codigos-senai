let vetor = []
let divisivel3e5 = 0
let divisivel3 = 0
let divisivel5 = 0

function calculo() {
  let valor = Number(document.getElementById("valor").value)

  vetor.push(valor)

  if (vetor.length >= 5) {
    vetor.forEach(num => {
      if (num % 3 === 0 && num % 5 === 0) {
        divisivel3e5++
      }
      if (num % 3 === 0) {
        divisivel3++
      }
      if (num % 5 === 0) {
        divisivel5++
      }
    })

    div3e5.innerHTML = `${divisivel3e5} números divisíveis por 3 e 5.`
    div3.innerHTML = `${divisivel3} números divisíveis por 3.`
    div5.innerHTML = `${divisivel5} números divisíveis por 5.`
  }

  vetorHTML.innerHTML = `Números digitados: ${vetor.join(", ")}`
}
