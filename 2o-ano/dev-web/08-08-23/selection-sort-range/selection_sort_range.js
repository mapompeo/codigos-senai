let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let num_array_original = []
let num_array = []
let contador = 0
Math.floor(Math.random() * (max - min + 1)) + min;

// function inserir() {
//     let insert = Number(document.getElementById('insert').value)
//     num_array.push(insert)

//     res.innerHTML = `Os valores digitados são: ${num_array}.`
// }

function ordenar() {
    let valor_atual = 0
    contador = 0

    console.log('**************')
    console.log(num_array)
    console.log('**************')

    for (let i = 0; i < num_array.length; i++) {
        let menor = i
        for (j = i + 1; j < num_array.length; j++){
            if (num_array[j] < num_array[menor]){
                menor = j
            }
        }
        if (i != menor) {
            valor_atual = num_array[i]
            num_array[i] = num_array[menor]
            num_array[menor] = valor_atual
        }
    }

    console.log('=============')
    console.log(num_array)
    console.log('=============')

    num_array.reverse()

    console.log(`O número de vezes que o progama repetiu o for é de ${contador} vezes`)
    res2.innerHTML = `Os valores ordenados por ordem decrescente "vetor.reverse()" e organizando utilizando o método "selection.sort" são: ${num_array}.`
}