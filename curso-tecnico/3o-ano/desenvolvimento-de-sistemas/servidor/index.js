// Express = Um framework web para Node.js que simplifica a criação de servidores web e APIs, oferecendo uma estrutura simples e robusta para lidar com solicitações HTTP, rotas e middlewares.
// Postman = Uma plataforma de colaboração para desenvolvimento de APIs, que permite aos desenvolvedores criar, testar e depurar APIs.
// Sequelize = Simplifica a interação com bancos de dados relacionais, permitindo que os desenvolvedores trabalhem com modelos de dados em JavaScript, em vez de escrever consultas SQL diretamente.

const express = require('express') // Solicita/Chama o framework Express para configurar o servidor
const app = express() // pega os dados do banco de dados e transforma em JSON
const conn = require('./db/conn')
const User = require('./Model/User')
const { raw } = require('mysql2')

const hostname = "localhost" // IP = 127.0.0.1
const port = 3000 // porta local

// o código 200 é sempre quando ocorre tudo certo
// o código 500 quando dá errado



/* --------------- Configurações do Express -------------------- */
app.use(express.urlencoded({extended:true})) // uso do midWare para URL
app.use(express.json()) // mensagens no corpo do HTTP em JSON
app.use(express.static('public')) // pasta dos arquivos estáticos => front end
/* ------------------------------------------------------------- */



/* ------------------------ MÉTODO CRUD ------------------------ */

// CREATE ou CADASTRAR
app.post('/cadastrar', async (req, res) => {
    try {
        const dados = req.body
        console.log(dados)
        console.log(dados.nome)
        console.log(dados.idade)
        await User.create(dados)
        res.status(200).json({message:"Dados recebidos com sucesso!"})
    }
    catch(err) {
        res.status(500).json({message:"Dados não foram recebidos"})
    }
})


// READ ou CONSULTAR
app.get('/consultar', async (req, res) => {
    const dados = req.body
    try {
        const pesquisa = User.findOne({where: {nome: dados.nome}, raw: true})
        if (pesquisa === null) {
            res.status(200).json({message: "Dados inexistentes no banco de dados!"})
        } else if (pesquisa.nome == dados.nome) {
            res.status(500).json(pesquisa.nome)
        }
    } catch(err) {
        res.status(500).json({message: "Não foi possível encontrar o registro!"})
    }
})


// DELETE ou APAGAR
app.delete('/apagar', async (req, res) => {
    const id = req.body.id
    try {
        const pesquisa = await User.findByPk(id, {raw: true}) // busca os dados pela PK
        if (pesquisa === null) {
            res.status(500).json({message: "Dados inexistentes!"})
        } else if (pesquisa.id == id) {
            await User.destroy({where: {id: id}})
            res.status(200).json({message: "Dados excluidos com sucesso!"})
        }
    } catch(err) {
        res.status(500).json({message: "Dados não recebidos"})
    }
})

/* ------------------------ FIM DO MÉTODO CRUD ------------------------ */

/* ------------------------ SERVIDOR ------------------------ */

// Rota de consulta ou endpoint dos arquivos
app.get('/user', async (req, res) => {
    try {
        const pesquisa = await User.findAll({raw: true}) // busca todos os dados da tabela
        res.status(200).json({pesquisa}) 
    } catch(err) {
        res.status(500).json({message: "Dados não encontrados"})
    }
})


// Código para mostrar se o servidor está funcionando
conn.sync().then(() => {
    app.listen(port, hostname, ()=> {
        console.log(`Servidor rodando em ${hostname}:${port}`)
    })
}).catch((err => {
    console.log("Não foi possível conectar com o banco de dados"+ err)
}))


// Código para mostrar uma mensagem caso ocorra tudo certo
app.get('/', (req, res) => {
    res.status(200).json({message: "Mensagem enviada com sucesso!"})
})

/* ------------------------ FIM DO SERVIDOR ------------------------ */