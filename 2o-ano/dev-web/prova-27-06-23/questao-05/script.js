function verificar() {
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)

    if (idade < 16) {
        resultado.innerHTML = `${nome}, você não está apto a votar pois tem ${idade} anos.`
        console.log(idade)
    } else if (idade < 18 && idade >= 16 || idade >= 60 ) {
        resultado.innerHTML = `${nome}, o voto é opcional pois você tem ${idade} anos.`
    }
    else {
        resultado.innerHTML = `${nome}, você deve votar pois tem ${idade} anos.`
    }
}