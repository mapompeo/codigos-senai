function verificar() {
    let valorUsuario = Number(document.getElementById('inputUsuario').value)
    let resultado = document.getElementById('resultado')
    let resultadoFinal = valorUsuario * 3


    if (valorUsuario < 10 || valorUsuario > 30) {
        resultado.innerHTML = `Insira um valor entre 10 e 30!`
    }
    else (
        resultado.innerHTML = `O triplo do valor digitado é ${resultadoFinal}!`
    )
}