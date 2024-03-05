const readLineSync = require('readline-sync')

let lado = Number(readLineSync.question(`Digite um lado do quadrado: `))

let areaQuadrado = lado * lado

console.log(`O valor da área do quadrado é ${areaQuadrado}.`)