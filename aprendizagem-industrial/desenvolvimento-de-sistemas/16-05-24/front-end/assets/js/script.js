let teste = document.getElementById('teste') 
let resposta = document.getElementById('resposta') 
let read = document.getElementById('read') 

teste.addEventListener('click', () => {
    fetch("http://localhost:8080/usuario")
    .then(resp => resp.json())
    .then(dados => {
        resposta.innerHTML = `${dados.Mensagem}`
    })
    .catch(err => {
        console.error(`O servidor não está rodando! ${err}`)
    })
})

read.addEventListener('click', () => {
    fetch("http://localhost:8080/usuario")
    .then(resp => resp.json())
    .then(dados => {
        resposta.innerHTML = "<ul>"
        dados.forEach(valor => {
          resposta.innerHTML += `<li>Id: ${valor.id}, idade: ${valor.idade}, nome: ${valor.nome}`  
        })
        resposta.innerHTML += "<ul/>"
    })
    .catch(err => {
        console.error(`O servidor não está rodando! ${err}`)
    })
})