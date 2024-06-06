let gravarVeiculo = document.getElementById('gravarVeiculo')
let gravarLocalStorage = document.getElementById('gravarLocalStorage')

gravarLocalStorage.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let telefone = document.getElementById('telefone').value
    let respostaLocalStorage = document.getElementById('respostaLocalStorage')
    
    const dadosCliente = {
        nome: nome,
        idade: idade,
        telefone: telefone
    }
    
    localStorage.setItem("dadosCliente", JSON.stringify(dadosCliente))
    const objeto = JSON.parse(localStorage.getItem("dadosCliente"))
    respostaLocalStorage.innerHTML = objeto.nome + objeto.idade + objeto.telefone
})

gravarVeiculo.addEventListener('click', () => {
    let carro = document.getElementById('carro').value
    let marca = document.getElementById('marca').value
    let ano = document.getElementById('ano').value
    let respostaCarro = document.getElementById('respostaCarro')
    
    const dadosVeiculo = {
        carro: carro,
        marca: marca,
        ano: ano
    }
    
    localStorage.setItem("dadosVeiculo", JSON.stringify(dadosVeiculo))
    const objeto = JSON.parse(localStorage.getItem("dadosVeiculo"))
    respostaCarro.innerHTML = objeto.carro + objeto.marca + objeto.ano
})