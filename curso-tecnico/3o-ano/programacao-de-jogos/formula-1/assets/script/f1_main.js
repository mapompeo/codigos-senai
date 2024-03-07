// API CANVAS
let des = document.getElementById('des').getContext('2d')
// FIM API CANVAS


// VARIAVEIS
let carro = new Carro (200,400,60,120, './assets/images/carro_01.png')
let carro02 = new Carro02 (400,900,80,80,'./assets/images/carro_02.png')
let carro03 = new Carro02 (132,1200,80,80,'./assets/images/carro_03.png')
let carro04 = new Carro02 (328,1500,80,80,'./assets/images/carro_04.png')
let carro05 = new Carro02 (5,1800,80,80,'./assets/images/carro_05.png')

let estradaFundo = new Estrada ("./assets/images/asfalto.jpg")
let estradaEsquerda = new Estrada (0,0,16,999,'white')
let estradaDireita = new Estrada (484,0,16,999,'white')
let estradaCentral01 = new Estrada (240,50,10,150,'white')
let estradaCentral02 = new Estrada (240,330,10,150,'white')
let estradaCentral03 = new Estrada (240,650,10,150,'white')

let texto01 = new Text
let texto02 = new Text

let theme = new Audio("./assets/sounds/themeMusic.wav")
let motor = new Audio("./assets/sounds/somCarro.wav")
let batida = new Audio("./assets/sounds/batida.wav")
// FIM VARIAVEIS


// AUDIO
theme.play()
motor.play()
theme.volume = 0.3
theme.loop = true
motor.volume = 0.3
motor.loop = true
batida.volume = 0.3
// FIM AUDIO


let jogar = true


// COMEÇO CODIGO
document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dirX -= 10
    }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dirX += 10
    }
    else if(e.key === 'w' || e.key === 'ArrowUp') {
        carro.dirY -= 10
    }
    else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dirY += 10
    }
    })

document.addEventListener('keyup', (e) => {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dirX = 0
        }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dirX = 0
        }
    else if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dirY = 0
        } 
    else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dirY = 0
        }
    })

function pontos() {
    if (carro.point(carro02)) {
        carro.pontuacao += 1
    }
    else if (carro.point(carro03)) {
        carro.pontuacao += 1
    }
    else if (carro.point(carro04)) {
        carro.pontuacao += 1
    } 
    else if (carro.point(carro05)) {
        carro.pontuacao += 1
    }
}

function colisao() {
    if (carro.colid(carro02)) {
        carro.vida -= 1
        carro02.recomeca()
        batida.play()
    } 
    else if (carro.colid(carro03)) {
        carro.vida -=1
        carro03.recomeca()
        batida.play()
    }
    else if (carro.colid(carro04)) {
        carro.vida -= 1
        carro04.recomeca()
        batida.play()
    }
    else if (carro.colid(carro05)) {
        carro.vida -= 1
        carro05.recomeca()
        batida.play()
    }
}
        
function desenha() {
    if (jogar) {
        estradaFundo.desenhaEstrada()
        estradaEsquerda.desenhaEstrada()
        estradaDireita.desenhaEstrada()
        estradaCentral01.desenhaEstrada()
        estradaCentral02.desenhaEstrada()
        estradaCentral03.desenhaEstrada()

        carro.desenhaImagem()
        carro02.desenhaCarro()
        carro03.desenhaCarro()
        carro04.desenhaCarro()
        carro05.desenhaCarro()
    } else {
        estradaFundo.desenhaEstrada()
        estradaEsquerda.desenhaEstrada()
        estradaDireita.desenhaEstrada()
        estradaCentral01.desenhaEstrada()
        estradaCentral02.desenhaEstrada()
        estradaCentral03.desenhaEstrada()
        texto01.desenhaTexto("GAME OVER!", 120, 350, 'red', '40px Montserrat')
    }

    texto01.desenhaTexto("Pontos:", 350, 40, 'white', '20px Montserrat')
    texto01.desenhaTexto(carro.pontuacao, 440, 40, 'white', '20px Montserrat')

    texto02.desenhaTexto("Vidas:", 40, 40, 'white', '20px Montserrat')
    texto02.desenhaTexto(carro.vida, 120, 40, 'white', '20px Montserrat')
}

function atualiza() {
    if (jogar) {
        estradaCentral01.moveEstrada()
        estradaCentral02.moveEstrada()
        estradaCentral03.moveEstrada()
        carro05.atualizaCarro02()
        carro04.atualizaCarro02()
        carro03.atualizaCarro02()
        carro02.atualizaCarro02()
        carro.atualizaCarro()
        pontos()
        colisao()
        gameOver()
    }
}

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

function gameOver() {
    if (carro.vida <= 0) {
        jogar = false
        motor.pause()
    }
}

setInterval(main,15)
// FIM AUDIO