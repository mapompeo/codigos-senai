const readLineSync = require('readline-sync')

let nota1 = 0, nota2 = 0, nota3 = 0

nota1 = Number(readLineSync.question(`Digite a primeira nota do aluno: `))
nota2 = Number(readLineSync.question(`Digite a segunda nota do aluno: `))
nota3 = Number(readLineSync.question(`Digite a terceira nota do aluno: `))

let media = (nota1 + nota2 + nota3) / 3 

console.log(`A média final é ${media.toFixed(2)}`)

if (media >= 7) {
    console.log(`Parabéns, você foi aprovado!`)
} else if (media >= 5 && media < 7) {
    console.log(`Você precisa fazer uma recuperação!`)
} else if (media >= 0 && media < 5) {
    console.log(`Você foi reprovado!`)
} else {
    console.log(`Erro no sistema!`)
}