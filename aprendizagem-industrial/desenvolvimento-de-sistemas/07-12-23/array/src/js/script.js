let resposta = document.getElementById('respota')
let cidadeArray = []


function inserir() {
    let cidade = document.getElementById('cidade').value
    let resposta = document.getElementById('resposta')
    cidadeArray.push(cidade)
    resposta.innerHTML = `${cidadeArray.join(", ")}`
}

function apagar() {
    let resposta = document.getElementById('resposta')
    cidadeArray.pop()
    resposta.innerHTML = `${cidadeArray}`
}

function inserirInicio() {
    let cidade = document.getElementById('cidade').value
    let resposta = document.getElementById('resposta')
    cidadeArray.unshift(cidade)
    resposta.innerHTML = `${cidadeArray.join(", ")}`
}

function apagarInicio() {
    let resposta = document.getElementById('resposta')
    cidadeArray.shift()
    resposta.innerHTML = `${cidadeArray}`
}

function refresh() {
    location.reload()
}