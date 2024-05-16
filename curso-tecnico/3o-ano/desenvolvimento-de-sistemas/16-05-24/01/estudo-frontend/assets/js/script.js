let resposta = document.getElementById('resposta')
let testar = document.getElementById('testar')
let consultar = document.getElementById('consultar')

testar.addEventListener('click', () => {
    fetch(`http://localhost:3000/`)
    .then(resp => resp.json())
    .then(dados => {
        resposta.innerHTML = `${dados.Mensagem}`
    })
    .catch(err => {
        console.error(`O servidor não está rodando! ${err}`)
    })
})

consultar.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    fetch(`http://localhost:3000/usuario/${nome}`)
    .then(resp => resp.json())
    .then(dados => {
        resposta.innerHTML = `${dados.nome}`
    })
    .catch((err) => {
        console.error(`O servidor não está rodando! ${err}`)
    })
})