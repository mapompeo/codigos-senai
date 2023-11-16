function calcular() {
    let lado = Number(document.getElementById("lado").value)
    let res = document.getElementById("resultado")
    let volume = lado * lado * lado
    res.innerHTML = `O volume do cubo é  ${volume.toFixed(2)}`;
}

function reload() {
    window.location.reload(true);
}