class Pessoa{
    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    calculaIMC(){
        let peso = this.peso
        let altura = this.altura
        let imcResultado = peso / (altura * altura)
        return imcResultado.toFixed(2)
    }

    classificaIMC(){
        let imcResultado = this.calculaIMC()
        console.log(imcResultado)
        if (imcResultado < 17) {
            return 'está muito abaixo do peso'
        }
        else if (imcResultado >= 17 && imcResultado < 18.5) {
            return 'está abaixo do peso'
        }
        else if (imcResultado >= 18.5 && imcResultado < 25) {
            return 'está no peso ideal'
        }
        else if (imcResultado >= 25 && imcResultado < 29.9) {
            return 'está acima do peso'
        }
        else if (imcResultado >= 30 && imcResultado < 34.9) {
            return 'está com o besidade grau 1'
        }
        else if (imcResultado >= 35 && imcResultado < 40) {
            return 'está com o besidade grau 2'
        }
        else if (imcResultado > 40) {
            return 'está com obesidade grau 3'
        }
        else {
            return 'não inseriu os valores, cálculo inválido! '
        }
    }
}