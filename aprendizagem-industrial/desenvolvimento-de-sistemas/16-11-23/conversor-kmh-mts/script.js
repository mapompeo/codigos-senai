function calculo() {
    let km = Number(document.getElementById("km").value)
    let res = document.getElementById("resultado")
    let mt = km / 3.6
    res.innerHTML = `${km} quilômetros por hora é igual a ${mt.toFixed(2)} metros por segundo!`;
}

function reload() {
    window.location.reload(true);
}