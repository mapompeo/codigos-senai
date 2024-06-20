let buscarProduto = document.getElementById('buscarProduto')
let resposta = document.getElementById('resposta')

buscarProduto.addEventListener('click', ()=>{
    let nome = getElementById('nome').value

    fetch(`http://localhost:8080/produtos/${nome}`)
    .then(resposta => resposta.json())
    .then(dados => {
        nome.value = dados.nome
        quantidade.value = dados.quantidade
    })
    .catch((err)=> console.error("Erro de servidor.",err))
})