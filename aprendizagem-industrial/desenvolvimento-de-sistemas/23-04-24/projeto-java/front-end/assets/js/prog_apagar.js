let res_apagar = document.getElementById("res_apagar")
let apagar = document.getElementById("apagar")

apagar.addEventListener('click', ()=>{
    const id = Number(document.getElementById('id').value)
    console.log(id)

    fetch(`http://localhost:8080/usuarios/${id}`,{
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res_apagar.innerHTML = "dados apagados! <br> <br>"
        res_apagar.innerHTML += "Código: " + dados.id + "&emsp;" +
                                "Nome: " + dados.nome + "&emsp;" +
                                "Idade: " + dados.idade + '<br>'
    })
    .catch((err)=> console.error("Erro ao apagar dados!",err))
})