const readLineSync = require('readline-sync')
const Prisma = require('./prisma_class')

let areaBase = Number(readLineSync.question(`Digite o valor da base: `))
let altura = Number(readLineSync.question(`Digite o valor da altura: `))

const prisma1 = new Prisma(areaBase, altura)

const volume = prisma1.calcularVolume()

console.log(`O volume do prisma é ${volume}.`)