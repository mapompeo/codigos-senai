class Piramide {
    constructor(areaBase, altura) {
        this.areaBase = areaBase
        this.altura = altura
    }

    calculaVolume() {
        let volume = 0.0
        volume = this.areaBase * this.altura
        return volume 
    }
}

module.exports = Piramide