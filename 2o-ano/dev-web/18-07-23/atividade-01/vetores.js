let res = document.querySelector('#res')
let dados = ['Itapema', 'Tijucas', 'São José']

function inserir() {
    let cidade = document.querySelector('#cidade').value
    dados.push(cidade)
    console.log(dados)
    res.innerHTML = `Sua cidade é: ${dados}`
}

function inserirInicio() {
    let cidade = document.querySelector('#cidade').value
    dados.unshift(cidade)
    console.log(dados)
    res.innerHTML = `Sua cidade é: ${dados}`
}

function remover() {
    dados.pop()
    console.log(dados)   
    res.innerHTML = `Sua cidade é: ${dados}`
}

function removerInicio() {
    dados.shift()
    console.log(dados)
    res.innerHTML = `Sua cidade é: ${dados}`
}