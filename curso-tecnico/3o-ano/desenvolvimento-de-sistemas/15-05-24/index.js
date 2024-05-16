// IMPORTANDO AS BIBLIOTECAS E ARQUIVOS
const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn.js')
const user = require('./model/user.js')

// CONFIGURAÇÕES DA REDE
const PORT = 3000
const hostname = 'localhost'

// CONFIGURAÇÕES DO EXPRESS
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/user/:dados', (requisition, response) => {
    const dados = requisition.body
    console.log(dados)
    response.status(200).json({Mensagem: `Dados recebidos!`})
})

app.get('/user', async (requisition, response) => {
    const dados = requisition.body
})

app.get('/', (requisiton, response) => {
    response.status(200).json({Mensagem: `Conexão realizada com sucesso!`})
})

// PARA SINCRONIZAR COM O BANCO DE DADOS
conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`Erro na conexão. ${err}`)
})