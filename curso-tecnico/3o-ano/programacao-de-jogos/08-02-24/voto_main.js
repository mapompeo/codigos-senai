let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log('Dados do formulário'+ nome, idade, titulo)

    const cidadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log(`Instancia do objeto ${cidadao}`)


    let mensagem = cidadao.verificaVoto()

    resposta.innerHTML = `O eleitor ${cidadao.nome}, tem ${cidadao.idade} anos, <br> com o título de eleitor "${cidadao.titulo}". ${mensagem}`
})