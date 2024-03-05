const readLineSync = require('readline-sync')
const Piramide = require('./piramide_class')

let areaBase = Number(readLineSync.question(`Digite o valor da base da pirâmide: `))
let altura = Number(readLineSync.question(`Digite o valor da altura da pirâmide: `))

const piramide1 = new Piramide(areaBase, altura)

const volume = piramide1.calculaVolume()

console.log(`O volume da pirâmide é ${volume}`)