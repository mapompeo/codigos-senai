function validarCPF(cpf) {
    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) return false

    // Transformar CPF em array de números usando um loop for
    const cpfArray = []
    for (let i = 0; i < cpf.length; i++) {
        cpfArray.push(Number(cpf.charAt(i)))
    }

    // Verificar se todos os dígitos são iguais
    let todosDigitosIguais = true
    for (let i = 1; i < cpfArray.length; i++) {
        if (cpfArray[i] !== cpfArray[0]) {
            todosDigitosIguais = false
            break
        }
    }
    if (todosDigitosIguais) return false

    // Calcular o primeiro dígito verificador
    let soma = 0
    for (let i = 0; i < 9; i++) {
        soma += cpfArray[i] * (10 - i)
    }
    let resto = soma % 11
    let digito1

    if (resto < 2) {
        digito1 = 0
    } else {
        digito1 = 11 - resto
    }

    // Calcular o segundo dígito verificador
    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * (11 - i)
    }
    resto = soma % 11
    let digito2

    if (resto < 2) {
        digito2 = 0
    } else {
        digito2 = 11 - resto
    }

    // Verificar se os dígitos verificadores são iguais aos do CPF
    if (digito1 === cpfArray[9] && digito2 === cpfArray[10]) {
        return true
    } else {
        return false
    }
}

// Exemplo de uso
const cpf = "12345678909" // Insira o CPF sem pontos e hífens
console.log(validarCPF(cpf) ? "O CPF: " + cpf + " é válido" : "O CPF: " + cpf + " é inválido")
// Exemplo de uso
const cpf2 = "12345678901" // Insira o CPF sem pontos e hífens
console.log(validarCPF(cpf2) ? "O CPF: " + cpf2 + " é válido" : "O CPF: " + cpf2 + " é inválido")

module.exports = validarCPF