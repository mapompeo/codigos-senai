const { Usuario } = require('../model/associacao')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesquisa = await Usuario.create(valores, { raw: true })
        res.status(200).json(pesquisa)
    } catch (err) {
        console.error(`Erro a cadastrar a Usuario, ${err}`)
        res.status(500).json({ message: 'Erro a cadastrar a Usuario!' })
    }
}

module.exports = { cadastrar }