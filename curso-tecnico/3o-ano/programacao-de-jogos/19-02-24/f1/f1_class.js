class Objeto {
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenha_Objeto() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}

class Carro extends Objeto {
    dir = 0

    desenhaCarro(){

    }

    atualizaCarro(){
        this.x = this.dir
        if (this.x <= 2) {
            this.dir = 2
        }
        else if (this.x >= 488 - this.w) {
            this.dir = 488 - this.w
        }
    }
}

class Estrada extends Objeto {
    desenhaEstrada() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    moveEstrada() {
        this.y += 10
        if (this.y >= 790) {
            this.y = -100
        }
    }
}