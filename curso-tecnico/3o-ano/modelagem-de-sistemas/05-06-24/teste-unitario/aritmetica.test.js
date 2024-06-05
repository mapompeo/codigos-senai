const { soma, subtracao, multiplicacao, divisao } = require('./aritmetica')

describe(`Teste das operações aritmeticas caso 8 DP 2`, () => {
    test(`O valor da soma de 8 + 2 = 10`, () => {
        expect(soma(8, 2))
            .toBe(10)
    })
    test(`O valor da subtração de 8 - 2 = 6`, () => {
        expect(subtracao(8, 2))
            .toBe(6)
    })
    test(`O valor da multiplicação de 8 * 2 = 16`, () => {
        expect(multiplicacao(8, 2))
            .toBe(16)
    })
    test(`O valor da divisão de 8 / 2 = 4`, () => {
        expect(divisao(8, 2))
            .toBe(4)
    })
})