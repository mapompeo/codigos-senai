const { Tarefa } = require('../model/associacao')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesquisa = await Tarefa.create(valores, { raw: true })
        res.status(200).json(pesquisa)
    } catch (err) {
        console.error(`Erro ao cadastrar a tarefa, ${err}`)
        res.status(500).json({ message: 'Erro ao cadastrar a tarefa!' })
    }
}

module.exports = { cadastrar }