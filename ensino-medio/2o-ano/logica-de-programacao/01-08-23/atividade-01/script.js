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
    let menor = num_array[0]

    for (let i = 0; i < num_array.length; i++) {
        let j = i - 1
        while (j >= 0 && menor < num_array[j]) {
            num_array[j + 1] = num_array[j]
        }
    }

    num_array[j + 1] = menor
    console.log(num_array)

    // Troca de valores entre posição do vetor nas variáveis
    // Inverter posição de valores no array
    // let menor = num_array[0]
    // num_array[0] = num_array[1]
    // num_array[1] = menor

}