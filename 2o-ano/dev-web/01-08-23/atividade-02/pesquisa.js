let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let num_array = []

function salva() {
    let num = Number(document.getElementById('num').value)
    num_array.push(num)

    console.log(num)
    console.log(num_array)
}

function pesquisa() {
    let pesq = Number(document.getElementById('pesq').value)
    for (let index = 0; index < num_array.length; index++) {
        if (pesq == num_array[index]) {
            console.log(`O valor existe e é igual a = ${num_array[index]}`)
        }
        
    }
}