let resistividade = 0.0172 // 0,0172 Ω. mm²/m
let areaTransversal = 1 // o valor mínimo é 1 para não dividir por zero
let comprimento = 0

let resistencia = (resistividade * comprimento) / areaTransversal

console.log(`O valor da resistencia é de: ${resistencia.tofixed(2)}Ω`)