let array = []
let soma = 0

function apertado() {
    if (event.key === 'Enter') {
      inserir();
    }
}

function inserir() {
    let input = Number(document.getElementById('input').value)
    if (input >= 0 && input <= 10) {
        if (array.length < 6) {
        array.push(input)
        // soma = soma/array.length
        document.getElementById('arrayResposta').innerHTML = `Os valores inseridos são ${array.join(', ')}.`
        }
        else {
            document.getElementById('erro').innerHTML = `Os valores máximos permitidos são até 6! Clique no próximo botão.`
        }
    }
    else {
        document.getElementById('erro').innerHTML = `Insira valores entre 0 e 10!`
    }
}

function media() {
    // let resultado = soma/array.length
    // mediaResposta.innerHTML = `A média dos valores é: ${resultado.toFixed(2)}!`
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i]
    }
    soma = soma/array.length
    document.getElementById('mediaResposta').innerHTML = `A média dos valores é: ${soma.toFixed(2)}!`
}

// no código existem dois modos de fazer a média dos valores, um método está sendo usado e o outro está comentado!