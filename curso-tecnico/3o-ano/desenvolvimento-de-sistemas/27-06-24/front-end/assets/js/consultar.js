let respostaConsultaProduto = document.getElementById('resposta-consulta-produto')
let consultarProduto = document.getElementById('consultar-produto')

consultarProduto.addEventListener('click', () => {
    let nomeConsultaProduto = document.getElementById('nome-consulta-produto').value

    fetch(`http://localhost:3000/produto?nome=${nomeConsultaProduto}`)
    .then(resposta => resposta.json())
    .then(dados => {
        respostaConsultaProduto.innerHTML = `Produto consultado: ${dados}`
    })
    .catch((err) => {
        console.error(`Erro ao consultar produto no front-end. ${err}`)
    })
})