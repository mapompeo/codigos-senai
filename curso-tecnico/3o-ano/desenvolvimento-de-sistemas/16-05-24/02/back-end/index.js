const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn.js')
const user = require('./model/user.js')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('usuario/:nome', async (requisition, response) => {
    const dados = requisition.params
    try {
        const pesquisa = await user.findOne({where: (nome = dados.nome), raw: true})
        if (pesquisa === null) {
            response.status(200).json({Message: `Erro na busca!`})
        }
        else if (pesquisa == dados.nome) {
            response.status(200).json({pesquisa})
        }
        else {
            response.status(200).json({message: `Não foi possível encontrar o nome!`})
        }
    }
    catch(err) {
        response.status(500).json({message: `Erro no servidor. ${err}`})
    }
})

app.post('/user', async (requisition, response) => {
    const dados = requisition.body
    try {
        await user.create({nome: dados.nome, idade: dados.idade})
        response.status(200).json(dados)
    }
    catch(err) {
        response.status(500).json({message: `Erro na gravação de dados`})
    }
})

app.get('/', (requisition, response) => {
    response.status(200).json({message: `Conexão realizada com sucesso!`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`Erro no servidor. ${err}`)
})