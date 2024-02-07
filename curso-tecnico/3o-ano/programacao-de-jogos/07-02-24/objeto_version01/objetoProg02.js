// let carro = {
//     marca: 'Ford',
//     modelo: 'Pampa',
//     ano: 1998,
//     preco: 3000
// }



//aqui a gente cria uma classe para usar de base para outras que virão

class Carro {
    constructor(nome, marca, ano, preco){
        this.nome = nome,
        this.marca = marca,
        this.ano = ano,
        this.preco = preco
    }
}


// aqui é o primeiro modo de declarar os valores

const carro1 = new Carro()

carro1.marca = 'Volkswagen'
carro1.nome = 'Gol'
carro1.ano = 1998
carro1.preco = 3000

console.log(carro1)


// este é o modo mais compacto

const carro2 = new Carro('Opala', 'Chevrolet', 1988, 40000)

console.log(carro2)