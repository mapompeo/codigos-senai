let resposta = document.getElementById("resposta")
let cepInput = document.getElementById("cep")
let consultarButton = document.getElementById("consultar")

async function consultarCEP() {
  let endereco = cepInput.value

  await fetch("https://viacep.com.br/ws/" + endereco + "/json/")
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados)

      resposta.innerHTML = `CEP: ${dados.cep} <br>`
      resposta.innerHTML += `Localidade: ${dados.localidade} <br>`
      resposta.innerHTML += `Bairro: ${dados.bairro} <br>`
      resposta.innerHTML += `Logradouro: ${dados.logradouro} <br>`
      resposta.innerHTML += `Estado: ${dados.uf} <br>`
      resposta.style.padding = '8px'
    })
    .catch((error) => {
      console.log("Erro na busca de dados", error)
    })
}

consultarButton.addEventListener("click", consultarCEP)

cepInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    consultarCEP();
  }
})