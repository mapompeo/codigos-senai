const conn = require('./db/conn')
const { Fabricante, Produto } = require('./model/assosiacao')

async function syncDatabase(){
    try{
        await conn.sync({force: true})
        console.log(`> Sincronizando tabelas`)
    }
    catch(err){
        console.error(`X Erro ao sincronizar banco de dados, ${err}`)
    }
    finally{
        conn.close()
        console.log(`> Fechando conexão`)
    }
}

syncDatabase()