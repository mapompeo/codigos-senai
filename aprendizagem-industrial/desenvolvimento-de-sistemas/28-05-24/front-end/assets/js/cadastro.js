let gravar = document.getElementById('gravar')

gravar.addEventListener('click', () => {
    let produto = document.getElementById('produto').value
    let marca = document.getElementById('marca').value
    let quantidade = Number(document.getElementById('quantidade').value)
    let validade = document.getElementById('validade').value
    let horaValidade = document.getElementById('horaValidade').value

    let dados = {
        produto,
        marca,
        quantidade,
        validade,
        horaValidade
    }

    console.log(dados)
})