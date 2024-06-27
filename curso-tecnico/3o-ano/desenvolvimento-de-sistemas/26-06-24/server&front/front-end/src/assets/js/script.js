let nomeProduto = document.getElementById('nome-produto').value
let quantidadeProduto = document.getElementById('quantidade-produto').value
let buscarProduto = document.getElementById('buscar-produto').value
let respostaCadastro = document.getElementById('resposta-cadastro')
let respostaBuscar = document.getElementById('resposta-buscar')

let cadastrar = document.getElementById('cadastrar')
let buscar = document.getElementById('buscar')

cadastrar.addEventListener('click', () => {
    const dados = {
        nome: nomeProduto,
        quantidade: quantidadeProduto
    }

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({dados})
    })
    .then(resposta => resposta.json())
    .then(dados => {
        respostaCadastro.innerHTML = `Dados cadastrados: ${dados.nome} | ${dados.quantidade}`
    })
    .catch((err) => {
        console.error(`Erro na busca. ${err}`)
    })
})

buscar.addEventListener('click', () => {
    fetch(`http://localhost:3000/produto?nome=${nome}`)
    .then(resposta => resposta.json())
    .then(dados => {
        respostaBuscar.innerHTML = `Nome: ${dados.nome} <br>`
        respostaBuscar.innerHTML += `Quantidade: ${dados.quantidade}` 
    })
    .catch((err) => {
        console.error(`Erro na busca. ${err}`)
    })
})