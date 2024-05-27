const express = require('express')
const cors = require('cors')
const app = express()
const conn = require('./db/conn.js')
const user = require('./model/user.js')

const PORT = 3000
const hostname = "localhost"

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: `Conexão realizada com sucesso!`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error(err)
})