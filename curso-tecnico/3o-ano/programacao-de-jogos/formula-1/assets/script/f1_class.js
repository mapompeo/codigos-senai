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
    dirX = 0
    dirY = 0
    pontuacao = 0
    vida = 3

    desenhaCarro(){
        // RODA DIANTEIRA DIREITA
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'black'
        des.rect(this.x+15, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // RODA DIANTEIRA ESQUERDA
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'black'
        des.rect(this.x-45, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()
        
        // RODA TRASEIRA ESQUERDA
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'black'
        des.rect(this.x-45, this.y+50,10,10)
        des.closePath()
        des.stroke()
        des.fill()
            
        // RODA TRASEIRA DIREITA
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = 'black'
        des.rect(this.x+15, this.y+50,10,10)
        des.closePath()
        des.stroke()
        des.fill()

         // CARCAÇA
         des.beginPath()
         des.lineWidth = '5'
         des.fillStyle = this.a
         des.rect(this.x-30, this.y-60,40,120)
         des.closePath()
         des.stroke()
         des.fill()
    }

    atualizaCarro(){
        this.x += this.dirX
        this.y += this.dirY

        // esquerda
        if (this.x <= 70) {
            this.x = 70 
        }
        // direita
        else if (this.x >= 464) {
            this.x = 484
        }
        // cima
        if (this.y <= 70) {
            this.y = 70
        // baixo
        } else if (this.y >= 700 - this.h) {
            this.y = 700 - this.h
        }
    }

    point(objeto) {
        if (this.y > objeto.y) {
            return true
        } else {
            return false
        }
    }

    colid(objeto) {
        if ((this.x < objeto.x + objeto.w)&&(this.x + this.w > objeto.x)&&(this.y < objeto.y + objeto.h)&&(this.y + this.h > objeto.y)){
            return true
        }
    }
}

class Carro02 extends Carro { 
    atualizaCarro02() {
        this.y += 3
        if (this.y >= 700) {
            this.y -= 800
            this.x = Math.floor(Math.random() * (416 - 65 + 1) + 65)
        }
    }

    recomeca() {
        this.y = +700
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

class Text {
    desenhaTexto (text, x, y, cor, font) {
       des.fillStyle = cor
       des.lineWidth = '5'
       des.font = font
       des.fillText(text, x, y)
    }
}