const { Fabricante, Produto }= require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('Tabelas cridas e banco de dados sincronizado!')
    }catch(err){
        console.error('Erro de sincronização com o banco de dados!')
    }finally{
        conn.close()
        console.log('Conexão do banco de dados fechada!')
    }
}

syncDataBase()