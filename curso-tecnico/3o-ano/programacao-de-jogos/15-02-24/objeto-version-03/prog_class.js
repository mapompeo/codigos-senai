class Obj {
    constructor(x,y,w,h,a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_obj() {
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    des_quad() {
        //des.beginPath() //começo do objeto
        des.strokeStyle = this.a
        des.lineWidth = '10'
        des.rect(this.x, this.y, this.w, this.h)
        //des.closePath() //começo do objeto
        des.stroke()
    }

    desenha_carro() {
        des.beginPath()
        des.moveTo(this.x, this.y)
        des.lineTo(this.x + 150, this.y)
        des.lineTo(this.x + 150, this.y + 150)
        des.lineTo(this.x + 150, this.y + 150)
        des.closePath()
        des.lineWidth = '20'
        des.strokeStyle = 'marine'
        des.fillStyle = this.a
        des.stroke()
        des.fill()
    }
}