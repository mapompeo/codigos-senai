let des = document.getElementById('des').getContext('2d')

let carro = new Carro (200,200,100,100,'black')
let estradaEsquerda = new Estrada (2,0,10,696,'yellow')
let estradaDireita = new Estrada (488,0,10,696,'yellow')
let estradaCentral = new Estrada (246,20,10,80,'white')

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dir -= 30
    }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dir += 30
    }
})

document.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dir -= 0
    }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dir += 0
    }
}) 


function desenha() {
    estradaEsquerda.desenhaEstrada()
    estradaDireita.desenhaEstrada()
    estradaCentral.desenhaEstrada()
    carro.desenha_Objeto()
}

function atualiza() {
    estradaCentral.moveEstrada()
    carro.atualizaCarro()
}

function main(){
    des.clearRect(0,0,500,600)
    desenha()
    atualiza()
}

setInterval(main,20)