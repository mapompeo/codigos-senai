let res_gravar = document.getElementById('res_gravar')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', ()=>{
    const idade = Number(document.getElementById("idade").value);
    const nome = document.getElementById("nome").value;

    dados = {
        nome: nome,
        idade: idade
    }

    fetch('http://localhost:8080/usuarios', {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log("dados gravados!")
        res_gravar.innerHTML = "Código: " + dados.id + "&emsp;" +
                               "Nome: " + dados.nome + "&emsp;" +
                               "Idade: " + dados.idade + '<br>'
        
        res_gravar.style.color = 'cornflowerblue'
        res_gravar.style.fontSize = '1.5rem'
    })
    .catch((err)=> console.error("erro ao gravar os dados!",err))

})