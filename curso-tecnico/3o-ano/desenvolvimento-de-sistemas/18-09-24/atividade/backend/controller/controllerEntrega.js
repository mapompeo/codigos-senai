const { Entrega } = require('../model/associacao')

const cadastrarEntrega = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Entrega.create(valores, { raw: true })
        res.status(201).json(pesq)
    } catch (err) {
        console.error('Erro a cadastrar o Entrega!', err)
        res.status(500).json({ message: 'Erro a cadastrar o Entrega!' })
    }
}

const listarEntrega = async (req, res) => {
    try {
        const pesq = await Entrega.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Erro a listar o Entrega!', err)
        res.status(500).json({ message: 'Erro a listar o Entrega!' })
    }
}

const consultarEntrega = async (req, res) => {
    const valor = req.query
    console.log(valor)
    try {
        const pesq = await Entrega.findOne({ where: { marca: valor.marca } })
        if (pesq === null) {
            console.log('Marca não encontrada no banco de dados!')
            res.status(404).json({ message: "Marca não encontrada no banco de dados!" })
        } else {
            console.log(pesq)
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('Erro a consultar o Entrega!', err)
        res.status(500).json({ message: 'Erro a consultar o Entrega!' })
    }
}

const apagarEntrega = async (req, res) => {
    const valor = req.params
    console.log(valor)
    try {
        const pesq = await Entrega.findByPk(valor.id)
        if (pesq === null) {
            console.log(pesq)
            res.status(404).json({ message: "Entrega não existe no banco de dados!" })
        } else {
            await Entrega.destroy({ where: { codEntrega: valor.id } })
            res.status(200).json({ message: "Fabricnate Excluído do banco de dados!" })
        }
    } catch (err) {
        console.error('Erro ao excluir o Entrega!', err)
        res.status(500).json({ message: 'Erro ao excluir o Entrega!' })
    }
}

const atualizarEntrega = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Entrega.findByPk(valores.codEntrega)
        if (pesq === null) {
            console.log(pesq)
            res.status(404).json({ message: "Entrega não encontrado no banco de dados!" })
        } else {
            await Entrega.update(valores, { where: { codEntrega: valores.codEntrega } })
            const pesq2 = await Entrega.findByPk(valores.codEntrega)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o Entrega!', err)
        res.status(500).json({ message: 'Erro ao atualizar o Entrega!' })
    }
}

module.exports = {
    cadastrarEntrega, listarEntrega,
    consultarEntrega, apagarEntrega, atualizarEntrega
}