class Eleitor {
    constructor(nome, idade, titulo) {
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }

    verificaVoto(){
        let idade = this.idade

        console.log(idade)

        if (idade < 16) {
            console.log("Você não pode votar")
            return `Você não pode votar`
        }
        else if (idade >= 16 && idade < 18 || idade > 70) {
            console.log(`O voto é opcional!`)
            return `O voto é opcional`
        }
        else {
            console.log(`O voto é obrigatório`)
            return `O voto é obrigatório`
        }
    }
}