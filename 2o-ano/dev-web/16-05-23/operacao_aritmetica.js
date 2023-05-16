function soma() {
    let num1 = Number(document.getElementById ('num1').value)
    let num2 = Number(document.getElementById ('num2').value)
    let escreva = document.getElementById ('escreva')

    let resp = num1 + num2

    escreva.innerHTML = ' O resultado é = ' + resp
}