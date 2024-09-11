const { Pedido } = require('../model/associacao')

const cadastrarPedido = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Pedido.create(valores, { raw: true })
        res.status(201).json(pesq)
    } catch (err) {
        console.error('Erro a cadastrar o Pedido!', err)
        res.status(500).json({ message: 'Erro a cadastrar o Pedido!' })
    }
}

module.exports = {cadastrarPedido}