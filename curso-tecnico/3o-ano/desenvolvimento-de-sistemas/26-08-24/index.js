const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn.js')
const compraController = require('./controllers/compraController.js')
const fabricanteController = require('./controllers/fabricanteController.js')
const produtoController = require('./controllers/produtoController.js')

const PORT = 3000
const hostname = 'localhost'


app.post('/compra', compraController.cadastrar)
app.get('/compra', compraController.listar)
app.get('/compra/:id', compraController.consultar)
app.delete('/compra', compraController.apagar)
app.put('/compra/:id', compraController.atualizar)

app.post('/fabricante', fabricanteController.cadastrar)
app.get('/fabricante', fabricanteController.listar)
app.get('/fabricante/:id', fabricanteController.consultar)
app.delete('/fabricante', fabricanteController.apagar)
app.put('/fabricante/:id', fabricanteController.atualizar)

app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.get('/produto/:id', produtoController.consultar)
app.delete('/produto', produtoController.apagar)
app.put('/produto/:id', produtoController.atualizar)


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: `Servidor rodando`})
})

conn.sync()
.then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error(err)
})