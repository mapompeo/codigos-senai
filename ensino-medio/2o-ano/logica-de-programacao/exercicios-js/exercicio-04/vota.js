function calculo() {
    let idade = Number(document.getElementById('idade').value)
    let nome = document.getElementById("nome").value

    if (idade >= 18 && idade <= 60) {
        res.innerHTML = nome + ', você está apto à votar pois tem ' + idade + ' anos.'
    }

    else if ((idade < 18 && idade > 15) || (idade > 60)) {
        res.innerHTML = nome + ', o voto é opcional pois você tem ' + idade + ' anos.'
    } else {
        res.innerHTML = nome + ', você não está apto à votar pois sua idade é de ' + idade + ' anos.'
    }

}