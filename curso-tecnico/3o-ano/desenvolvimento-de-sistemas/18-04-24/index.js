const express = require('express') // Solicita/Chama o framework Express para configurar o servidor
const app = express() // pega os dados do banco de dados e transforma em JSON
const conn = require('./db/conn')
const User = require('./Model/User')

const hostname = "localhost" // IP = 127.0.0.1
const port = 3000 // porta local


/* ----------------- Configurações do Express ----------------------- */
app.use(express.urlencoded({extended:true})) // uso do midWare para URL
app.use(express.json()) // mensagens no corpo do HTTP em JSON
app.use(express.static('public')) // pasta dos arquivos estáticos => front end
/* ------------------------------------------------------------------ */


// Código para mostrar se o servidor está funcionando
conn.sync().then(() => {
    app.listen(port, hostname, ()=> {
        console.log(`Servidor rodando em ${hostname}:${port}`)
    })
}).catch((err => {
    console.log("Não foi possível conectar com o banco de dados"+ err)
}))


// Rota de consulta
app.get('/user', async (req, res) => {
    try {
        const pesquisa = await User.findAll({raw: true}) // busca todos os dados da tabela
        console.log(pesquisa)
        res.status(200).json({pesquisa}) // o código 200 é sempre quando ocorre tudo certo
    } catch(err) {
        console.error("Erro de consulta"+ err)
        res.status(500).json({message: "Dados não encontrados"}) // o código 500 quando dá errado 
    }
})


// Código para mostrar uma mensagem caso ocorra tudo certo
app.get('/', (req, res) => {
    res.status(200).json({message: "Mensagem enviada com sucesso!"}) // o código 200 é sempre quando ocorre tudo certo
})
