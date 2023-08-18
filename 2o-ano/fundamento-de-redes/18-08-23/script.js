let resultado = document.getElementById('resultado')

function gravar() {
    let altura = Number(document.getElementById('altura').value)
    resultado.innerHTML = `Sua altura é ${altura} m`
}