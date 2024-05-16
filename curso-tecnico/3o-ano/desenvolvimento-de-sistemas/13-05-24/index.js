// IMPORTAR TODOS OS BAGULHO DOIDO
const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('../estudo-backend/db/conn.js')
const User = require('../estudo-backend/model/user.js')

const PORT = 3000
const hostname = 'localhost'

// CONFIGURAÇÕES DO EXPRESS
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/user/:dados', async (requisition, response) => {
    const dados = requisition.params
    console.log(dados)
    response.status(200).json({message: `Dados recebidos!`})
})

app.get('/user', async (requisition, response) => {
    const dados = requisition.body
})

app.get('/', (requisition, response) =>{
    response.status(200).json({message: "conexão realizada com sucesso!"})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`Erro de conexão, ${err}`)
})