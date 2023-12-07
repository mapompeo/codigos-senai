let resposta = document.getElementById('resposta')
let dados = []

function inserir() {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let telefone = Number(document.getElementById('telefone').value)

    dados.push(nome, idade, telefone)

    for (let i = 0; i < dados.length; i++) {
        if (i == 0) {
            resposta.innerHTML += `Nome ${dados[i]}. `
        }
        else if (i == 1) {
            resposta.innerHTML += `Idade: ${dados[i]}. `
        }
        else if (i == 2) {
            resposta.innerHTML += `Telefone ${dados[i]}. `
        }
    }
    resposta.innerHTML += `<br>`
}