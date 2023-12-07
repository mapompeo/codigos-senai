let resposta = document.getElementById('respota')
let cidadeArray = []

function inserir() {
    let cidade = document.getElementById('cidade').value
    let atualizacao = document.getElementById('atualizacao')
    let resposta = document.getElementById('resposta')

    cidadeArray.push(cidade)
    console.log(cidadeArray)

    resposta.innerHTML = `${cidadeArray.join(", ")}`
    atualizacao.innerHTML = `Valor digitado foi inserido!`
}

function apagar() {
    let atualizacao = document.getElementById('atualizacao')
    let resposta = document.getElementById('resposta')

    cidadeArray.pop()

    resposta.innerHTML = `${cidadeArray.join(", ")}`
    atualizacao.innerHTML = `Valor removido!`
}

function refresh() {
    location.reload()
}