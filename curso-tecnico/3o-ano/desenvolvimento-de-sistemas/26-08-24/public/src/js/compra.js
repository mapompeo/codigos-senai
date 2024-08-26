cadastrar.addEventListener('click', () => {
    let nomeCadastrar = document.getElementById('nomeCadastrar').value
    let cpfCadastrar = document.getElementById('cpfCadastrar').value

    const dados = {
        nome: nomeCadastrar,
        cpf: cpfCadastrar
    }

    fetch('http://127.0.0.1:3000/cliente', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        resposta.innerHTML = dados.nomeCadastrar
        resposta.innerHTML += dados.cpfCadastrar
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro ao gravar dados. ${err}`)
    })
})

atualizar.addEventListener('click', () => {
    let codClienteAtualizar = document.getElementById('codCliente').value
    let cpfAtualizar = document.getElementById('cpfAtualizar').value
    let nomeAtualizar = document.getElementById('nomeAtualizar').value

    const dados = {
        codCliente: codClienteAtualizar,
        nome: nomeAtualizar,
        cpf: cpfAtualizar
    }

    fetch('http://127.0.0.1:3000/cliente', {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        resposta.innerHTML = dados.codClienteAtualizar
        resposta.innerHTML += dados.nomeAtualizar
        resposta.innerHTML += dados.cpfAtualizar
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro ao gravar dados. ${err}`)
    })
})

deletar.addEventListener('click', () => {
    let codClienteDeletar = document.getElementById('codClienteDeletar').value

    fetch(`http://127.0.0.1:3000/cliente/${codClienteDeletar}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        resposta.innerHTML = dados.nome
    })
    .catch((err) => {
        console.error(`Erro ao apagar dados. ${err}`)
    })
})

consultar.addEventListener('click', () => {
    let codClienteConsultar = document.getElementById('codClienteConsultar').value

    fetch(`http://127.0.0.1:3000/cliente?codClienteConsultar=${codClienteConsultar}`)
    .then(resposta => resposta.json())
    .then(dados => {
        resposta.innerHTML = `marca: ${dados.nome} <br>`
        resposta.innerHTML += `cnpj: ${dados.cpf}`
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro ao consultar dados. ${err}`)
    })
})

listar.addEventListener('click', () => { 
    fetch(`http://127.0.0.1:3000/cliente`)
    .then(resposta => resposta.json())
    .then(dados => {
        const res = JSON.stringify(dados)
        resposta.innerHTML = res
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro ao consultar dados. ${err}`)
    })
})