let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array = []

function randomize(max, min) {
    let respostaRandom = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Resposta randômica = ${respostaRandom}`)
    return respostaRandom
}

function inserir() {
    num_array = []
    let min = 0
    let max = Number(document.getElementById('num').value)

    for (i = min; i < max; i++) {
        let resposta = randomize(max, min)
        num_array.push(resposta)
    }
    res.innerHTML = `O array criado com ${max} números, é  ${num_array.join(', ')}`
}

function ordenar() {
    let valor_atual = 0
    let contador = 0

    console.log('**************')
    console.log(num_array)
    console.log('**************')

    for (j = num_array.length - 1; j > 0; j--) {
        contador += 1 // sempre usar +=
        for (let index = 0; index < num_array.length - 1; index++) {
            contador = contador + 1 // esta forma é a menos utilizada
            if(num_array[index] > num_array [index + 1]){
            valor_atual = num_array[index]
            num_array[index] = num_array[index + 1]
            num_array[index + 1] = valor_atual

            console.log('------------')
            console.log(num_array)
            console.log('------------')
            }
        }
    }
    console.log('=============')
    console.log(num_array)
    console.log('=============')

    console.log(`O número de vezes que o progama repetiu o for é de ${contador} vezes`)

    res2.innerHTML = `Os valores ordenados por ordem crescente utilizando o método"bubble.sort" são: ${num_array.join(', ')}.`
}