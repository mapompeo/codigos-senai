const Carro = {
    modelo: "fusca",
    ano: 1975,
    roda: 4,
    motor: "1.6",
    aro: {
        tamanho: 20,
        cor: "prata"
    }
}

console.log(Carro)


let Carro2 = JSON.stringify(Carro)

console.log(Carro2)


let Carro3 = JSON.parse(Carro2)

console.log(Carro2)