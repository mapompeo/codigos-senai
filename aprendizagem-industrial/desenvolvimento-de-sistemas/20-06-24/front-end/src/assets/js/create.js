let cadastrarProduto = document.getElementById('cadastrarProduto')
let cadastrarFabricante = document.getElementById('cadastrarFabricante')
let resCadFab = document.getElementById('resCadFab')
let resCadProd = document.getElementById('resCadProd')
let nomeFab = document.getElementById('nomeFab').value

cadastrarFabricante.addEventListener('click', ()=>{
    const valor = {
        nomeFab : nomeFab
    }

    fetch(`http://localhost:8080/fabricante`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(valor)
    })
    .then(respostaFab => respostaFab.json())
    .then(dados => {
        console.log(dados);
        resCadFab.innerHTML = "Dados Cadastrados"
    })
    .catch((err)=> console.error('Erro no Servidor!', err))
})

// cadastrarProduto.addEventListener('click', ()=>{
//     let nome = document.getElementById('nome').value
//     let quantidade = document.getElementById('quantidade').value

//     const valores = {
//         nome : nome,
//         quantidade : quantidade
//     }
 
//     fetch('http://localhost:8080/doador',{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body: JSON.stringify(valores)

//     })
//     .then(resp => resp.json())
//     .then(dados => {        
//         console.log(dados);
//         res.innerHTML = "Dados Cadastrados"
//     })
//     .catch((err)=> console.error(" Digite novamente!", err))
// })

