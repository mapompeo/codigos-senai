let valor = [2, 12, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]

function ordenaNum(a,b) {
    return a-b
}

console.log(valor)
console.log("-----------------------------------")
valor.sort()
console.log(valor)
console.log("-----------------------------------")
valor.sort(ordenaNum)
console.log(valor)