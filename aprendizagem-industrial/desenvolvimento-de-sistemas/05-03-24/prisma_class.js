class Prisma {
    constructor(areaBase, altura) {
        this.areaBase = areaBase
        this.altura = altura
    }

    calcularVolume() {
        let volume = 0.0
        volume = this.altura * this.areaBase
        return volume
    }
}

module.exports = Prisma