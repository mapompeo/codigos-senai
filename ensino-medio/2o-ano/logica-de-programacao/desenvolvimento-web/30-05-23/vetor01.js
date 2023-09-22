let res1 = document.getElementById("res1")
let res2 = document.getElementById("res2")
let vetor1 = [1, 2, 3, 4, 5, 6, 7]
let vetor2 = [1, 3, 8, 6, 4, 9, 2]

function soma_vetor(){
    let soma1 = 0 
    for(i=0; i<7; i++){
          soma1 = soma1 + vetor1[i]
    }
    console.log(soma1)
    res1.innerHTML = `A soma dos elementos internos é = ${soma1}`

    let soma2 = 0 
    for(i=0; i<7; i++){
    soma2 = soma2 + vetor2[i]}

    console.log(soma2)
    res2.innerHTML = `A soma dos elementos internos é = ${soma2}`
}