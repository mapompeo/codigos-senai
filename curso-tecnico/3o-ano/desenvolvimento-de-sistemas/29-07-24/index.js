const express = require('express')
const app = express()
const db = require('./db/conn')
const User = require('./model/user')
const Adress = require('./model/adress')
const Users = require('./model/users')
const cors = require('cors')

const Port = 3000
const hostname = 'localhost'

app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({Message: "Servidor respodendo"})
})

app.post('/cadastrar', async (req, res) => {
    const data = req.body
    try{
        await User.create(data, {raw: true})
        res.status(201)
    }
    catch(err){
        console.error(`X Erro na rota /, ${err}`)
        res.status(500).json({Message: `Erro`})
    }
})

app.get('consulta', async (req, res) => {
    const pesq = req.query
    try {
        const pesq = await User.findOne({raw: true, where: {nome: dados.nome}})
        res.status(201)
    }
    catch (err) {
        console.error(`X Erro na rota /, ${err}`)
        res.status(500).json({Message: `Erro`})
    }
})

db.sync().then(() =>
    app.listen(Port, hostname, () =>{
        console.log(`> Index.js rodando em ${hostname}:${Port}`)
    })
).catch((err) => {
    console.error(`X Erro ao sincronizar e iniciar servidor, ${err}`)
})