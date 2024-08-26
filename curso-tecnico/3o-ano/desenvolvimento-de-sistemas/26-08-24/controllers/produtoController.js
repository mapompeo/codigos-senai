const { Produto } = require('../model/associacao.js')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Produto.create(valores, {raw:true})
        res.status(200).json(pesq)
        console.log(pesq)
    }
    catch(err) {
        console.error(err)
        res.status(500).json({message: `Erro ao cadastrar Produto`})
    }
}

const listar = async (req, res) => {
    try {
        const pesq = await Produto.findAll()
        res.status(200).json(pesq)
    }
    catch(err) {
        res.status(500).json({message: `Erro ao listar Produto`})
    }
}

const consultar = async (req, res) => {
    const valores = req.query
    try {
        const pesq = await Produto.findOne({where: {codProduto: valores.codProduto}})
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao consultar Produto`})
    }
}

const apagar = async (req, res) => {
    const valores = req.params
    try {
        const pesq = await Produto.findByPk(valores.id)
        if (pseq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Produto.destroy({where: {codProduto:valores.id}})
            res.status(200).json(pesq)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir produto`})
    }
}

const atualizar = async (req, res) => {
    const valores = req.body
    try {
        const pesq = await Produto.findByPk(valores.codProduto)
        if (pesq === null) {
            res.status(404).json({message: `Valor não encontrado no banco de dados!`})
        }
        else {
            await Produto.update(valores, {where: {codProduto: valores.codProduto}})
            const pesq2 = await produto.findByPk(valores.codProduto)
            res.status(200).json(pesq2)
        }
    }
    catch(err) {
        res.status(500).json({message: `Erro ao excluir produto`})
    }
}
 
module.exports = { cadastrar, listar, consultar, apagar, atualizar }