let res = document.getElementById('res')
let teste = document.getElementById('teste')
let buscar = document.getElementById('buscar')
let procurador = document.getElementById('procurador')

teste.addEventListener('click', ()=>{
    fetch('http://localhost:8080/')
    .then(resposta => resposta.text())
    .then(dados => {
        res.innerHTML = dados
        res.style.fontSize = "1.4rem"
        res.style.fontWeight = "Bold"
    })
    .catch((err)=> console.error("servidor não responde!",err))
})

buscar.addEventListener('click', ()=>{
    fetch('http://localhost:8080/usuarios')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res.innerHTML = "<ul>"
        dados.forEach(valor => {
          res.innerHTML += "<li>Código: " + valor.id + "&emsp;" +
                           "Nome: " + valor.nome + "&emsp;" +
                           "Idade: " + valor.idade + "<br>"  
        })
        res.innerHTML += "</ul>"
        res.style.fontSize = "1.4rem"
        res.style.fontWeight = "Bold"
    })
    .catch((err)=> console.error("servidor não responde!",err))
})

procurador.addEventListener('click', ()=>{
    const codigo = Number(document.getElementById('codigo').value)

    fetch(`http://localhost:8080/usuarios/${codigo}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = "Código: " + dados.id + "&emsp;" +
                        "Nome: " + dados.nome + "&emsp;" +
                        "idade: " + dados.idade
    })
    .catch((err)=> console.error("servidor não responde!",err))
})
