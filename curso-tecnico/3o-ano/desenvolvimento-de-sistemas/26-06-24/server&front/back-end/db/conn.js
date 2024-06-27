const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => {
    console.log(`Conexão com banco de dados realizada com sucesso!`)
})
.catch((err) => {
    console.error(`Erro no servidor. ${err}`)
})

module.exports = sequelize