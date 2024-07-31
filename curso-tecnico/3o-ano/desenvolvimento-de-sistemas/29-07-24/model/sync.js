const conn = require('./db/conn')
const { Users, Adress } = require('./model/Assosiation')

async function syncDatabase(){
    try{
        await conn.sync({force:true})
        console.log(`> Tabelas criadas`)
    }
    catch(err){
        console.error(`X Erro durante a sincronização das tabelas. ${err}`)
    }
    finally{
        conn.close()
        console.log(`> Sincronização do banco de dados finalizada.`)
    }
}

syncDatabase()