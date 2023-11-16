function media() {
    let nota1 = Number(document.getElementById("1").value)
    let nota2 = Number(document.getElementById("2").value)
    let nota3 = Number(document.getElementById("3").value)
    let res = document.getElementById("resultado")

    let media = (nota1 + nota2 + nota3) / 3

    if (media < 7) { 
        res.innerHTML = `A média das notas é <span class="notaBaixa">${media.toFixed(2)}</span>`;
    }
    else {
        res.innerHTML = `A média das notas é <span class="notaAlta">${media.toFixed(2)}</span>`;
    }
}

function reload() {
    window.location.reload(true);
}