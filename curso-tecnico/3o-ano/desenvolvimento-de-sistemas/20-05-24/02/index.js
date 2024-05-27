const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/conn.js')
const user = require('./model/user.js')

const PORT = 3000
const hostname = "localhost"

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

conn.sync()
.then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.log(`Erro no servidor. ${err}`)
})