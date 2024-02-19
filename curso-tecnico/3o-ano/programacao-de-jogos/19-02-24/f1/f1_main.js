let des = document.getElementById('des').getContext('2d')
let carro = new Obj (10,10,100,100,'blue')

function desenha() {

}

function atualiza() {

}

function main(){
    des.clearRect(0,0,500,600)
    desenha()
    atualiza()
}

setInterval(main,10)