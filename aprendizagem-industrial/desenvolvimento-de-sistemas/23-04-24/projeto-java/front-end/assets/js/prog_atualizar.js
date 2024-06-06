let res_atualizar = document.getElementById('res_atualizar')
let atualizar = document.getElementById('atualizar')

atualizar.addEventListener('click', () => {
    const id = document.getElementById('id').value
    const nome = document.getElementById('nome').value
    const idade = Number(document.getElementById('idade').value)

    const valores = {
        nome: nome,
        idade: idade
    }

    fetch(`http://localhost:8080/usuario/${id}`, {
        method: "PUT",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        atualizar.innerHTML = "Código: " + dados.id + "&emsp;" +
                               "Nome: " + dados.nome + "&emsp;" +
                               "Idade: " + dados.idade + '<br>'
        atualizar.innerHTML += `Dados atualizados com sucesso!`
    })
    .catch((err) => {
        console.error(`Erro no prog_atualizar. ${err}`)
    })
})