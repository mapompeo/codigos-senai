const conn = require('./db/conn.js')
const { Compra, Pedido, Fabricante } = require('./model/associacao.js')

async function syncDatabase() {
    try {
        await conn.sync({force:true})
    }
    catch(err) {
        console.error(`Erro ao sincronizar banco de dados`)
    }
    finally {
        conn.close()
        console.log(`Conexão fechada com o banco de dados`)
    }
}

syncDatabase()