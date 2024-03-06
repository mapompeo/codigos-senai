const readLineSync = require('readline-sync')

let array01 = [9, 8, 7, 6, 5, 4]
let array02 = []
let array03 = []

let i = 0
let value = 0

function read() {
    while (i <= 5) {
        value = Number(readLineSync.question("Digite um valor para ser armazenado: "))
        array02.push(value)
        i += 1
    }
}

function sum() {
    for (let i = 0; i < array01.length; i++) {
        array03[i] = array01[i] + array02[i]
    }
}

function subtract() {
    
}

console.log(`Soma de dois arrays utilizando outros métodos!`)

let readFunction = read()
let sumFunction = sum()

console.log(`Os valores inseridos são: ${array02.join(', ')}.`)
console.log(`Os valores somados são: ${array03.join(', ')}.`)