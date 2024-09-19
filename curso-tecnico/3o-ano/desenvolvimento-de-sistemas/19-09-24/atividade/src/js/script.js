let buttonTerno01 = document.getElementById('buttonTerno01')

let produtos = []

function adicionarCarrinho(e) {
    let nome = e.target.getAttribute('data-nome')
    let preco = e.target.getAttribute('data-preco')
    let codProduto = e.target.getAttribute('data-codProduto')
    let quantidade = e.target.parentElement.querySelector('#sla').value

    let produto = {
        nome: nome,
        preco: preco,
        codProduto: codProduto,
        quantidade: quantidade
    }

    produtos.push(produto)
    console.log(produtos)

    localStorage.setItem('produtos', produtos)
    // oi vinicios 🚲 o.o (●'◡'●)  ⨋⫸⫸⫵ᾠjk⇋௹
}

buttonTerno01.addEventListener('click', adicionarCarrinho)