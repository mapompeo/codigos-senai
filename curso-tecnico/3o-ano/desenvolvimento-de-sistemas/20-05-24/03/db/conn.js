const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_teste3', 'root', 'senai', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log(`Conexão com o banco de dados realizada com sucesso!`)
})
.catch((err) => {
    console.error(`Erro na conexão com o banco de dados!`)
})

module.exports = sequelize