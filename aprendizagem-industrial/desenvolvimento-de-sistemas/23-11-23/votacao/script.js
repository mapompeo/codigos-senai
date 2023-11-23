function reload() {
    window.location.reload(true);
}

function calcular() {
    let resultado = document.getElementById('resultado')
    let idade = Number(document.getElementById("idade").value)

    if (idade >= 18 && idade < 70) {
        resultado.innerHTML = `Voto obrigatório!`
    }

    else if (idade >= 16 && idade < 18 || idade >= 70) {
        resultado.innerHTML = `Voto é opcional!`
    }

    else if (idade < 16){
        resultado.innerHTML = `Você não pode votar!`
    }

    else {
        resultado.innerHTML = `Insira um valor!`
    }
}