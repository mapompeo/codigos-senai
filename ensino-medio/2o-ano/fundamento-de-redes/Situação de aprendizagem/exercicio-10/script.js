let res = document.getElementById('res')

function binario(){
    let numero = document.getElementById('numero').value
    let cbinario = parseInt(numero, 10)
    let final = cbinario.toString(2)

    res.innerHTML = `O número ${numero} em binário fica ${final}`
}

function octal(){
    let numero = document.getElementById('numero').value
    let coctal = parseInt(numero, 10)
    let final = coctal.toString(8)

    res.innerHTML = `O número ${numero} em octal fica ${final}`
}

function hexadecimal(){
    let numero = document.getElementById('numero').value
    let coctal = parseInt(numero, 10)
    let final = coctal.toString(16)

    res.innerHTML = `O número ${numero} em hexadecimal fica ${final}`
}