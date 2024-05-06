const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./database/connection.js')
const Usuario = require('./model/cadastro.js')
const { where } = require('sequelize')
const { raw } = require('mysql2')

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


//<-- ROTAS DO SISTEMA -->

// ROTA CADASTRAR
app.post('/cadastrar', async (requisition, response) => { 
    const dados = requisition.body
    console.log(dados)
    try {
        await Usuario.create(dados)
        console.log(dados)
        response.status(200).json(dados)
    } catch(err) {
        console.error(`erro ${err}`)
        response.status(500)
    }
})

// ROTA DELETAR
app.delete('/deletar', async (requisition, response) => {
    const dados = requisition.body
    console.log(dados)
    response.status(200).json({message: "Dados recebidos"})
    try {
        await Usuario.destroy({where: {id: requisition.body.id}})
    } catch(err) {
        
    }
})

// ROTA USUARIO
app.post('/usuario', async (requision, response) => { 
    const dados = requision.query
    console.log(dados)
    try {
        const pesquisa = Usuario.findOne({raw: true, where: {nome: dados.nome}})
        console.log(pesquisa)
        response.status(200).json(pesquisa)
    } catch(err) {
        console.error(`Erro: ${err}`)
        response.status(500).json({message: `Erro na gravação do banco de dados!`})
    }
})

//<-- FIM ROTAS DO SISTEMA -->