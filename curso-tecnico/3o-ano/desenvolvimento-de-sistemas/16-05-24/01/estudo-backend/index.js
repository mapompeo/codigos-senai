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

app.get('/usuario/:nome', async (requisition, response) => {
    const dados = requisition.params
    try {
        const pesquisa = await user.findOne({where: {nome: dados.nome}, raw: true})
        if (pesquisa === null) {
            response.status(200).json({Mensagem: `Usuário inexistente!`})
        }
        else if (pesquisa.nome == dados.nome) {
            response.status(200).json(pesquisa)
        }
        else {
            response.status(200).json({Mensagem: `Usuário inexistente!`})
        }
    }
    catch(err) {
        response.status(500).json({Mensagem: `Erro do servidor. ${err}`})
    }
})

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