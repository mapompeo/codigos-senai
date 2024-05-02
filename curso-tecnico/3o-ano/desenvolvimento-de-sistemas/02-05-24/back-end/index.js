const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./database/connection.js')
const cadastro = require('./model/cadastro.js')

const port = "0666"
const hostname = 'localhost'

// ------ CONFIGURAÇÕES DO EXPRESS ------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
// ------ CONFIGURAÇÕES DO EXPRESS ------

connection.sync().then(() => {
    app.listen(port, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${port}`)
    })
}).catch((err) => {
    console.error(`Erro de conexão com o banco de dados! ${err}`)
})




app.get('/', async (requisition, response) => {
    response.end(`Servidor rodando corretamente!`)
})

// CADASTRAR
app.post('/cadastrar', async (requisition, response) => {
    const dados = requisition.body
    console.log(dados)
    response.status(200).json({message: "Dados recebidos"})
    try {
        await User.create({nome: requisition.body.nome, idade:requisition.body.hostname})
        console.log({nome: requisition.body.nome, idade:requisition.body.hostname})
    }
})