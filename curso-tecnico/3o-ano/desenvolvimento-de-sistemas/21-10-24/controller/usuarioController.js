const { Usuario } = require('../model/associacao')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesquisa = await Usuario.create(valores, { raw: true })
        res.status(200).json(pesquisa)
    } catch (err) {
        console.error(`Erro ao cadastrar o usuario, ${err}`)
        res.status(500).json({ message: 'Erro ao cadastrar o usuario!' })
    }
}

module.exports = { cadastrar }