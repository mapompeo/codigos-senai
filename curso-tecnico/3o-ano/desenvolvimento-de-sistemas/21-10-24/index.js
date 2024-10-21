const express = require('express')
const cors = require('cors')
const app = express()
const conn = require('./db/conn.js')
const usuarioController = require('./controller/usuarioController.js')
const tarefaController = require('./controller/tarefaController.js')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/cadastrarUsuario', usuarioController.cadastrar)
app.post('/cadastrarTarefa', tarefaController.cadastrar)

app.get('/', (req, res) => {
    res.status(200).json({message:`Servidor rodando`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`Erro ao conectar com o servidor. ${err}`)
})