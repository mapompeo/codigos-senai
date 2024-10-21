let resposta = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    const dados = {
        nome: nome,
        email: email
    }

    fetch('http://localhost:3000/cadastrarUsuario',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err) => {
        console.error(`Erro, ${err}`)
        resposta.innerHTML = `Erro`
    })
})