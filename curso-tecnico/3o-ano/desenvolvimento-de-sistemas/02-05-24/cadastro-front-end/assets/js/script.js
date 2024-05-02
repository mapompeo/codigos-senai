let resposta = document.getElementById("resposta")
let cadastrarButton = document.getElementById("cadastrar")

async function cadastrar() {
  let nome = document.getElementById("nome").value
  let idade = 20

  await fetch("localhost:0666/cadastrar", {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({nome, idade})
  })
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados)
    })
    .catch((error) => {
      console.log("Erro na busca de dados", error)
    })
}

cadastrarButton.addEventListener("click", cadastrar())