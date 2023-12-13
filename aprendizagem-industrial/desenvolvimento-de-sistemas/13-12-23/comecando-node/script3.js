// Programa de operação aritmética de soma e subtração 

let num1 = 5.5, num2 = 7.7
if (num2 <= num1) {
    console.log("O segundo número é menor que o primeiro!")
}

if (num1 <= num2) {
    let soma = num1 + num2
    console.log("A soma é igual a =", soma)
}


let numArray = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < numArray.length; i++) {
    console.log("Os valores do Array são: ", numArray)
}


let somaArray = 0
for (let i = 0; i < numArray.length; i++) {
    somaArray+= numArray[i]
}
console.log(somaArray)