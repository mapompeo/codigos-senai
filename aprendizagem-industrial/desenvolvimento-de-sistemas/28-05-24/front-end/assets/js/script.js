let teste = document.getElementById('teste')

teste.addEventListener('click', () => {
    let resposta = document.getElementById('resposta')
    let data = new Date("2022-07-23")
    resposta.innerHTML = data
})
