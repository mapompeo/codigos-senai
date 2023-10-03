let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let num_array_original = []
let num_array = []

function inserir(){
    num_array_original = []
    res.innerHTML = ''
    let valor = Number(document.getElementById('valor').value)
    let random = 0
    for (let i = 0; i < valor; i++) {
        random = Math.floor(Math.random() * (100 - 0 + 1) + 0)
        num_array_original.push(random)
    }
    res.innerHTML = `${num_array_original.join(", ")}.`
}

function quickRecursiva(vetor){
    if(vetor.length <= 1){
        return vetor
    }
    let pivot = vetor[0];
      const left = [];
      const right = [];
      for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < pivot) {
          left.push(vetor[i]);
        } else {
          right.push(vetor[i]);
        }
      }
    return quickRecursiva(left).concat([pivot], quickRecursiva(right))
}
function quickSort(){
    num_array = quickRecursiva(num_array_original)
    res2.innerHTML = `${num_array.join(", ")}.`
}

