const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db/conn')
const Produto = require('./model/Produto')
const Fabricante = require("./model/Fabricante")

const hostname = 'localhost'
const PORT = 3000
/*--------------- config express ------------------*/
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
/*------------------------------------------------*/

app.post('/produto', (req, res) => {
    let dados = req.body
    console.log(dados)
    if(dados.fabricanteId == 1){
        res.status(200).json({Message: "dados corretos"})
    }else{
        res.status(500).json({Message: "dados incorretos"})
    }
})

app.put('/fabricante:/id', async (req, res) => {
    const valores = req.body
    const pesq = await Fabricante.findByPk(valores.codFabricante)
    res.status(200).json({message: `Dados recebidos`})
})

// consultar um fabricante
app.get('/fabricante', async (req,res)=>{
    const dados = req.query
    try{
        const pesquisa = Fabricante.findOne({where: {nome: dados.nome}, raw: true})
        if(pesquisa == null){
            console.log('valores inexistentes')
            res.status(404).json({message: 'valores inexistentes'})
        }else if(pesquisa.marca == dados.marca){
            console.log(pesquisa.marca)
            res.status(200).json(pesquisa)
        }       
    }catch (err) {
        console.log(`X Erro ao cadastrar os dados, ${err}`)
        res.status(500).json({message: 'X Erro ao cadastrar os dados'})
    }
})

// consultar todos fabricantes
app.get('/fabricantes', async (req,res)=>{
    const dados = req.query
    try{
        const pesquisa = Fabricante.findAll()
        if(pesquisa == null){
            console.log('valores inexistentes')
            res.status(404).json({message: 'valores inexistentes'})
        }else if(pesquisa.marca == dados.marca){
            console.log(pesquisa.marca)
            res.status(200).json(pesquisa)
        }       
    }catch (err) {
        console.log(`X Erro ao cadastrar os dados, ${err}`)
        res.status(500).json({message: 'X Erro ao cadastrar os dados'})
    }
})

// deletar por chave primaria
app.delete('/fabricante/:id', async (req, res) => {
    const valor = req.params
    const pesq = await Fabricante.findByPk(valor.id)
    try {
        if (pesq === null) {
            res.status(204).json({message: `Valor não encontrado no banco de dados`})
        }
        else {
            await Fabricante.destroy({where: {valor : fabricanteId}})
            res.status(200).json({message: `Valor deletado do banco de dados`})
        }
    }
    catch (err) {
        res.status(500).json({message: `Erro ao deletar dados. ${err}`})
    }
})

// criar fabricante
app.post('/fabricante', async (req,res)=>{
    const dados = req.body
    try{
        const pesquisa = await Fabricante.create(dados, {raw:true})
        res.status(200).json(pesquisa)
    } catch(err){
        console.log(`X Erro ao cadastrar os dados, ${err}`)
        res.status(500).json({message: 'X Erro ao cadastrar os dados'})
    }
})

app.get('/raiz', (req, res)=>{
    res.status(200).send('servidor conectado')
})
/*------------------------------------------------*/
db.sync().then(()=>{
    app.listen(hostname, PORT, ()=>{
        console.log(`> Servidor conectado em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error(`X Erro ao concetar o servidor, ${err}`)
})