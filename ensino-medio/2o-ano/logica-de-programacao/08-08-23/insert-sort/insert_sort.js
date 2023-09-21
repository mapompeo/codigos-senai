 
let res = document.getElementById('res')
let res2 = document.getElementById('res2')

let num_array_original = []
let num_array = []

function inserir() {
    let num = Number(document.getElementById('num').value)
    num_array.push(num)

    console.log(num_array)
    res.innerHTML = `Os valores digitados são: ${num_array}.`
}

 function ordenar() {
    let valor_atual = 0
    let contador = 0

    console.log('**************')
    console.log(num_array)
    console.log('**************')

    for(i = 0; i < num_array.length; i++) {
        contador += 1
        let j = i - 1
        valor_atual = num_array[i]
        while (j >= 0 && valor_atual < num_array[j]) {
            contador += 1
            num_array[j + 1] = num_array[j]

            console.log('------------')
            console.log(num_array)
            console.log('------------')

            j--
        }
        num_array[j + 1] = valor_atual
    }
    console.log('=============')
    console.log(num_array)
    console.log('=============')

    console.log(`O número de vezes que o progama repetiu o while é de ${contador} vezes`)

    res2.innerHTML = `Os valores ordenados por ordem crescente utilizando o método "insert.sort" são: ${num_array}.`
}




// for (j = num_array.length - 1; j > 0; j--) {
//     contador += 1 // sempre usar +=
//     for (let index = 0; index < num_array.length - 1; inde++) {
//         contador = contador + 1 // esta forma é a menosutilizada
//         if(num_array[index] > num_array [index + 1]){
//         valor_atual = num_array[index]
//         num_array[index] = num_array[index + 1]
//         num_array[index + 1] = valor_atual

//         console.log('------------')
//         console.log(num_array)
//         console.log('------------')
//         }
//     }
// }
// console.log('=============')
// console.log(num_array)
// console.log('=============')

// console.log(`O número de vezes que o progama repetiu o for éde ${contador} vezes`)

// res2.innerHTML = `Os valores ordenados por ordem crescente são: ${num_array}.`