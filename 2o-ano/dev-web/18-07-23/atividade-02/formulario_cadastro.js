let res = document.querySelector('#res')
let res2 = document.querySelector('#res2')
let res3 = document.querySelector('#res3')
let nomeArray = []
let idadeArray = []
let alturaArray = []

function inserir() {
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade').value
    let altura = document.querySelector('#altura').value
    nomeArray.push(nome)
    idadeArray.push(idade)
    alturaArray.push(altura)
    res.innerHTML = `Seu nome é: ${nomeArray}.`
    res2.innerHTML = `Sua idade é: ${idadeArray}.`
    res3.innerHTML = `Sua altura é ${alturaArray}.`
}

function inserirInicio() {
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade').value
    let altura = document.querySelector('#altura').value
    nomeArray.unshift(nome)
    idadeArray.unshift(idade)
    alturaArray.unshift(altura)
    res.innerHTML = `Seu nome é: ${nomeArray}.`
    res2.innerHTML = `Sua idade é: ${idadeArray}.`
    res3.innerHTML = `Sua altura é ${alturaArray}.`
}

function remover() {
    nomeArray.pop(nome)
    idadeArray.pop(idade)
    alturaArray.pop(altura)
    res.innerHTML = `Seu nome é: ${nomeArray}.`
    res2.innerHTML = `Sua idade é: ${idadeArray}.`
    res3.innerHTML = `Sua altura é ${alturaArray}.`
}

function removerInicio() {
    nomeArray.shift()
    idadeArray.shift()
    alturaArray.shift()
    res.innerHTML = `Seu nome é: ${nomeArray}.`
    res2.innerHTML = `Sua idade é: ${idadeArray}.`
    res3.innerHTML = `Sua altura é ${alturaArray}.`
}