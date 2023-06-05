function calculo () {
    let mercurio = Number(document.getElementById('mercurio').value)
    let psi = Number(document.getElementById('psi').value)
    console.log(mercurio)
    console.log(psi)

    let totalMercurio = mercurio / 51.715
    let totalPsi = psi * 51.715

    res_mercurio.innerHTML = 'O valor de mmHg é de = ' + totalMercurio.toFixed(4) + ' PSI'
    res_psi.innerHTML = 'O valor de PSI é de = ' + totalPsi.toFixed(4) + ' mmHg'
    res_mercurio.style.color = 'white'
    res_psi.style.color = 'white'
}