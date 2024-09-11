const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')

const clienteController = require('./controllers/clienteController')
const pedidoController = require('./controllers/pedidoController')
const produtoController = require('./controllers/produtoController')

const PORT = 3000
const hostname = 'localhost'

app.post('/cliente', clienteController.cadastrarCliente)
app.put('/cliente', clienteController.atualizarCliente)
app.get('/cliente/:id', clienteController.consultarCliente)
app.get('/cliente', clienteController.listarCliente)
app.delete('/cliente/:id', clienteController.apagarCliente)

app.get('/pedido', pedidoController.cadastrarPedido)

app.get('/produto', produtoController.cadastrarProduto)

app.use(express.urlencoded({extended:urlencoded}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: `Servidor rodando`})
})

conn.sync()
.then(() => {  
    app.listen(PORT, hostname, () => {
        res.status(200).json({message: `Servidor rodando em ${hostname}:${PORT}`})
    })
})
.catch((err) => {
    console.error(err)
})