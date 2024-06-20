let listarProduto = document.getElementById('listarProduto')
let resposta = document.getElementById('resposta').value

listarProduto.addEventListener('click', ()=>{

    fetch('http://localhost:8080/produto')
    .then(respostaBack => respostaBack.json())
    .then(nome => {
        resposta.innerHTML = respostaBack
    })
    .catch((err) =>
        console.error("Erro no servidor. o/", err))
})