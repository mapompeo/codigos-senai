let res = document.getElementById('res')

// API Fetch para buscar dados na web => JSON
fetch('https://viacep.com.br/ws/01001000/json/') // endpoint ou rota
.then(resposta => resposta.json())
.then(dados => console.log(dados))
.catch(error => console.error(error))