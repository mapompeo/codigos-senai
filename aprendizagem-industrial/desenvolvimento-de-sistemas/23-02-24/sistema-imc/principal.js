let resposta = document.getElementById('resposta')
let calcula = document.getElementById('calcular')

calcula.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    
    const pacinete = new Paciente(nome, altura, peso)

    let imc = pacinete.calculaIMC()
    let resultado = pacinete.verificaIMC()

    console.log(`O cliente ${nome}, tem ${imc} de IMC`)
    console.log(`A classificação do paciente ${nome}, ${resultado}`)

    resposta.innerHTML = `O cliente ${nome}, tem ${imc.toFixed(2)} de IMC. A classificação do paciente ${nome} é ${resultado}.`
})