const { Produto } = require('../model/associacao')

const cadastrarProduto = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Produto.create(valores, { raw: true })
        res.status(201).json(pesq)
    } catch (err) {
        console.error('Erro a cadastrar o Produto!', err)
        res.status(500).json({ message: 'Erro a cadastrar o Produto!' })
    }
}

module.exports = {cadastrarProduto}