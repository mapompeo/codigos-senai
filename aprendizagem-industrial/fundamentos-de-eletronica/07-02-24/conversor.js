let resistividade = 0.0172 // 0,0172 Ω. mm²/m
let areaTransversal = 2.5 // o valor mínimo é 1 para não dividir por zero
let comprimento = 1555

let resistencia = (resistividade * comprimento) / areaTransversal

console.log(`O valor da resistencia é de: ${resistencia}Ω`)