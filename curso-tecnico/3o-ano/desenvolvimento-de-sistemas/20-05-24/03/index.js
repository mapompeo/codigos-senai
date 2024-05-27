const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn.js')
const user = require('./model/user.js')

const PORT = 3000
const hostname = "localhost"

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: `Servidor rodando corretamente`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error(`Erro na conexão com o banco de dados! ${err}`)
})