const { Usuario, Tarefa } = require('./model/associacao.js')
const conn = require('./db/conn.js')

async function syncDatabase() {
    try {
        await conn.sync({force:true})
        console.log(`Conexão com o banco de dados realizada com sucesso.`)
    }
    catch (err) {
        console.error(`Erro ao sincronizar com o banco de dados${err}`)
    }
    finally {
        await conn.close()
        console.log(`Conexão com o banco de dados finalizada.`)
    }
}

syncDatabase()