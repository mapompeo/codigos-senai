class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    
    mensagem() {
        console.log("Olá")
    }
    
    teste() {
        let valor = 2
        let num = 3
        let resposta = valor + num

        return resposta
    }

}