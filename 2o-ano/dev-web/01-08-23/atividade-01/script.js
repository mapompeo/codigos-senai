let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let num_array = []

function salva() {
    let num = Number(document.getElementById('num').value)
    num_array.push(num)

    console.log(num)
    console.log(num_array)
}

function ordena() {
    let menor = num_array [0]
    let tamanho = num_array.length

    let pesq = Number(document.getElementById('pesq').value)
    for (let index = 0; index < num_array.length; index++) {
        console.log(`O valor do array é = ${num_array[index]}`)
        if (menor > num_array[index + 1]) {
            num_array[index] = num_array[index + 1]
            num_array[index + 1] = menor
        }
    }
}