const express = require('express')
const app = express()
const cors = require('cors')
const user = require('./model/user.js')
const conn = require('./db/conn.js')

const PORT = 3000
const hostname = "localhost"

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.end(`Servidor rodando`)
})

app.get('/produto', async (req, res) => {
    const dados = req.body
    try {
        const pesq = await Produto.findOne({raw: true, where: {nome: dados.nome}})
        res.status(200).json()
    }
    catch{
        res.status(500).json({msg:`Erro no servidor. ${err}`})
    }
})

app.post('/produto', async (req, res) => {
    const dados = req.body
    try {
        await Produto.create(dados, {raw: true})
        res.status(200).json()
    }
    catch{
        res.status(500).json({msg:`Erro no servidor. ${err}`})
    }
})

conn.sync()
.then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error(`Erro. ${err}`)
})