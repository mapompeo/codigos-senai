let compras = document.getElementById('compras')
let buttonResumo = document.getElementById('buttonResumo')

console.log(buttonResumo)

buttonResumo.addEventListener('click', ()=>{
    let carrinho = JSON.parse(localStorage.getItem('produtos'))
    console.log(carrinho)
    compras.innerHTML = ''
    
    carrinho.array.forEach(prod => {
        compras.innerHTML += `Produto: ${prod.name} R$: ${prod.preco} Quantidade ${prod.quantidade}`
    });
})