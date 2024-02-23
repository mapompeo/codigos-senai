class Paciente{
    constructor(nome, altura, peso){
        this.nome = nome
        this.altura = altura
        this.peso = peso
    }

    calculaIMC() {
        let resultado = 0

            resultado = (this.peso) / (this.altura * this.altura)

        return resultado
    }

    verificaIMC() {
        let imc = this.calculaIMC()

        if (imc < 18.5) {
            return "Abaixo do peso"
        } else if (imc > 18.6 && imc < 24.9) {
            return "Peso ideal"
        } else if (imc > 25 && imc < 29.9) {
            return "levemente acima do peso"
        } else if (imc > 30 && imc < 34.9) {
            return "Obesidade grau 1"
        } else if (imc > 35 && imc < 39.9) {
            return "Obesidade grau 2"
        } else if (imc >= 40) {
            return "Obesidade mórbida"
        } else {
            return "Não foi possível encontrar o índice"
        }
    }
}