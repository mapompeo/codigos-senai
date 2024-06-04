let buscaCEP = document.getElementById('buscaCEP')
let cadastrar = document.getElementById('cadastrar')
let resposta = document.getElementById('resposta')

buscaCEP.addEventListener('click', () => {
    let cep = document.getElementById('cep').value

    let logradouro = document.getElementById('logradouro')
    let complemento = document.getElementById('complemento')
    let bairro = document.getElementById('bairro')
    let localidade = document.getElementById('localidade')
    let uf = document.getElementById('uf')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        logradouro.value = dados.logradouro
        complemento.value = dados.complemento
        bairro.value = dados.bairro
        localidade.value = dados.localidade
        uf.value = dados.uf
    })
    .catch((err) => {
        console.error(`CEP não encontrado. Digite novamente! ${err}`)
    })
})

cadastrar.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    let cpf = Number(document.getElementById('cpf').value)
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let cep = document.getElementById('cep').value
    let logradouro = document.getElementById('logradouro').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value

    const dadosUsuario = {
        nome,
        cpf,
        telefone,
        email,
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf
    }

    console.log(dadosUsuario)
})