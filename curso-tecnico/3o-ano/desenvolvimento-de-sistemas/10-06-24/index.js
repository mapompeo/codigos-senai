const express = require('express')
const cors = require('cors')
const app = express()
const port = "3000"
const hostname = 'localhost'

// ------ CONFIGURAÇÕES DO EXPRESS ------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
// ------ CONFIGURAÇÕES DO EXPRESS ------

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em ${hostname}:${port}`)
})

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']
const dados = [65, 59, 80, 81, 56, 55, 40]

app.get('/dados', async (req, res) => {
    try {
        res.status(200).json({meses: meses, dados: dados})
    } catch(err) {
        console.error(err)
        res.status(500).json(err)
    }
})

app.get('/', async (req, res) => {
    res.end(`Servidor rodando corretamente!`)
})