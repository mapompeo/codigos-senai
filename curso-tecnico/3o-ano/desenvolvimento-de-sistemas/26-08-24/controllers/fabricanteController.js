const { Fabricante } = require('../model/associacao.js')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Fabricante.create(valores, {raw:true})
        res.status(200).json(pesq)
        console.log(pesq)
    }
    catch(err) {
        console.error(err)
        res.status(500).json({message: `Erro ao cadastrar fabricante`})
    }
}

const listar = async (req, res) => {
    try {
        const pesq = await Fabricante.findAll()
        res.status(200).json(pesq)
    }
    catch(err) {
        res.status(500).json({message: `Erro ao listar fabricante`})
    }
}

const consultar = async (req, res) => {
    const valores = req.query
    try {
        const pesq = await Fabricante.findOne({where: {codFabricante: valores.codFabricante}})
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao consultar fabricante`})
    }
}

const apagar = async (req, res) => {
    const valores = req.params
    try {
        const pesq = await Fabricante.findByPk(valores.id)
        if (pseq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Fabricante.destroy({where: {codFabricante:valores.id}})
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir fabricante`})
    }
}

const atualizar = async (req, res) => {a
    const valores = req.body
    try {
        const pesq = await Fabricante.findByPk(valores.codFabricante)
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Fabricante.update(valores, {where: {codFabricante: valores.codFabricante}})
            const pesq2 = await Fabricante.findByPk(valores.codFabricante)
            res.status(200).json(pesq2)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir fabricante`})
    }
}

module.exports = { cadastrar, listar, consultar, apagar, atualizar }