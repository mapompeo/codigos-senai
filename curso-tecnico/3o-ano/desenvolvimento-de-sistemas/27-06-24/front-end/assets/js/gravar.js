let gravarProduto = document.getElementById('gravar-produto')
let respostaGravarProduto = document.getElementById('resposta-gravar-produto')

gravarProduto.addEventListener('click', () => {
    let nomeProduto = document.getElementById('nome-produto').value
    let quantidadeProduto = document.getElementById('quantidade-produto').value
    
    const dados = {
        nome: nomeProduto,
        quantidade: quantidadeProduto
    }

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type':'application.json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        respostaGravarProduto.innerHTML = `Dados cadastrados: ${dados.nome} | ${dados.quantidade}`
    })
    .catch((err) => {
        console.error(`Erro ao gravar produtos no front-end. ${err}`)
    })
})