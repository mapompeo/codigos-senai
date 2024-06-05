const { subtracaoArray, somaArray } = require('./atividade-01')
let array = [1, 1, 1, 1, 1]

describe(`Teste da subtração de dois arrays`, () => {
    test(`O resultado da subtração do array é: -5`, () => {
        expect(subtracaoArray(array))
            .toBe(-5)
    })
    test(`O resultado da soma do array é: 5`, () => {
        expect(somaArray(array))
            .toBe(5)
    })
})