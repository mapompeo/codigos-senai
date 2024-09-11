const { Clientes } = require('../model/associacao')
const validarCPF = require('../validar_cpf')

const cadastrarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        if (validarCPF(valor.cpf)) {
            const pesq = await Cliente.create(valores, { raw: true })
            res.status(201).json(pesq)   
        }
        else {
            res.status(404).json({message: `Não foi possível cadastrar os valores`})   
        }
    } catch (err) {
        console.error('Erro a cadastrar o Cliente!', err)
        res.status(500).json({ message: 'Erro a cadastrar o Cliente!' })
    }
}

const listarCliente = async (req, res) => {
    try {
        const pesq = await Cliente.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Erro a listar o Cliente!', err)
        res.status(500).json({ message: 'Erro a listar o Cliente!' })
    }
}

const consultarCliente = async (req, res) => {
    const valor = req.query
    console.log(valor)
    try {
        const pesq = await Cliente.findOne({ where: { marca: valor.marca } })
        if (pesq === null) {
            console.log('Marca não encontrada no banco de dados!')
            res.status(404).json({ message: "Marca não encontrada no banco de dados!" })
        } else {
            console.log(pesq)
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('Erro a consultar o Cliente!', err)
        res.status(500).json({ message: 'Erro a consultar o Cliente!' })
    }
}

const apagarCliente = async (req, res) => {
    const valor = req.params
    console.log(valor)
    try {
        const pesq = await Cliente.findByPk(valor.id)
        if (pesq === null) {
            console.log(pesq)
            res.status(404).json({ message: "Cliente não existe no banco de dados!" })
        } else {
            await Cliente.destroy({ where: { codFabricante: valor.id } })
            res.status(200).json({ message: "Fabricnate Excluído do banco de dados!" })
        }
    } catch (err) {
        console.error('Erro ao excluir o Cliente!', err)
        res.status(500).json({ message: 'Erro ao excluir o Cliente!' })
    }
}

const atualizarCliente = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Cliente.findByPk(valores.codFabricante)
        if (pesq === null) {
            console.log(pesq)
            res.status(404).json({ message: "Cliente não encontrado no banco de dados!" })
        } else {
            await Cliente.update(valores, { where: { codFabricante: valores.codFabricante } })
            const pesq2 = await Cliente.findByPk(valores.codFabricante)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o Cliente!', err)
        res.status(500).json({ message: 'Erro ao atualizar o Cliente!' })
    }
}

module.exports = {
    cadastrarCliente, listarCliente,
    consultarCliente, apagarCliente, atualizarCliente
}