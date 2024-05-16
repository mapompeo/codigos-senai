let resposta = document.getElementById("resposta")
let cadastrarButton = document.getElementById("cadastrar")

cadastrarButton.addEventListener("click", async () => {
  let nome = document.getElementById("nome").value
  let idade = document.getElementById("idade").value

  await fetch("http://localhost:0666/cadastrar", {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({nome, idade})
  })
    .then(response => response.json())
    .then(dados => {
      console.log(dados)
      resposta.innerHTML = `Nome: ${dados.nome}, idade: ${dados.idade}`
      resposta.style.padding = '8px'
      console.log(dados)
    })
    .catch((error) => {
      console.log("Erro na busca de dados", error)
    })
})