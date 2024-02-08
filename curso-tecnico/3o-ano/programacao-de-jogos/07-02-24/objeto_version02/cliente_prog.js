let resposta = document.getElementById('resposta')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=> {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)

    const cliente1 = new Pessoa()

    cliente1.nome = nome
    cliente1.idade = idade
    cliente1.altura = altura

    console.log(cliente1)

    cliente1.mensagem()
    cliente1.teste()

    let resultado = cliente1.teste()
    console.log(resultado)
    }
)