const { Compra } = require('../model/associacao.js')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Compra.create(valores, {raw:true})
        res.status(200).json(pesq)
        console.log(pesq)
    }
    catch(err) {
        console.error(err)
        res.status(500).json({message: `Erro ao cadastrar compra`})
    }
}

const listar = async (req, res) => {
    try {
        const pesq = await Compra.findAll()
        res.status(200).json(pesq)
    }
    catch(err) {
        res.status(500).json({message: `Erro ao listar compra`})
    }
}

const consultar = async (req, res) => {
    const valores = req.query
    try {
        const pesq = await Compra.findOne({where: {codCompras: valores.codCompras}})
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao consultar compras`})
    }
}

const apagar = async (req, res) => {
    const valores = req.params
    try {
        const pesq = await Compra.findByPk(valores.id)
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Fornecedor.destroy({where: {codCompras:valores.id}})
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir compras`})
    }
}

const atualizar = async (req, res) => {
    const valores = req.body
    try {
        const pesq = await Compra.findByPk(valores.codCompras)
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Compra.update(valores, {where: {codCompras: valores.codCompras}})
            const pesq2 = await Compra.findByPk(valores.codCompras)
            res.status(200).json(pesq2)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir compra`})
    }
}

module.exports = { cadastrar, listar, consultar, apagar, atualizar }