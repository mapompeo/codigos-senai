const associacao = require('./model/associacao')
const conn = require('./db/conn')

async function snycDatabase(params) {
    try {
        await conn.sync({force:true})
        console.log(`Criada a sincronização das tabelas`)
    }
    catch(err) {
        console.error(err)
    }
    finally {
        conn.close()
        console.log(`Fechada a conexão das tabelas`)
    }
}

snycDatabase()