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

        console.log(`O número de vezes é que o progama repetiu o for é de ${contador} vezes`)

        res2.innerHTML = `Os valores ordenados por ordem crescente são: ${num_array}.`
    }