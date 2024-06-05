const leia = require('readline-sync')
const { soma, subtracao, multiplicacao, divisao } = require('./aritmetica')

function main() {
    console.log(`----------------------------------`)
    let a = leia.question(`Digite um valor: `)
    let b = leia.question(`Digite um segundo valor: `)
    console.log(`----------------------------------`)
    console.log(`Digite a sua operacao: (+, -, *, /)`)
    let operacao = leia.question(`Digite a operacao: `)

    let resultado = 0

    switch (operacao) {
        case "+":
            resultado = soma(a, b)
            break;
        case "-":
            resultado = subtracao(a, b)
            break;
        case "*":
            resultado = multiplicacao(a, b)
            break;
        case "/":
            resultado = divisao(a, b)
            break;
        default:
            console.log(`Erro ao realizar as operacoes`)
    }
    console.log(resultado)
    console.log(`----------------------------------`)
}

main()