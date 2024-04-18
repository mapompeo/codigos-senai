import fetch from "node-fetch"

fetch("https://dummyjson.com/products/5")
.then(resposta => resposta.json())
.then(dados => console.log(dados))
.catch(err => console.log("erro: ",err))