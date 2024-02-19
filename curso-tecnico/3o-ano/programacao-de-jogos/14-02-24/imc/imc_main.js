let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=> {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)

    const pessoa1 = new Pessoa(nome, idade, peso, altura)
    console.log(pessoa1)

    let imc = pessoa1.calculaIMC()
    console.log(imc)

    let classifica = pessoa1.classificaIMC()
    console.log(classifica)

    resposta.innerHTML = `O cliente ${pessoa1.nome} <br> tem ${pessoa1.idade} anos de idade, <br> com um peso de ${pessoa1.peso} kg e altura de ${pessoa1.altura}, <br> ${pessoa1.nome}  ${classifica}`
})