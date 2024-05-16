const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('estudo', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => {
    console.log(`Conexão com o banco de dados realizada com sucesso!`)
}).catch((err) => {
    console.error(`Erro de conexão com o banco de dados!`)
})

module.exports = sequelize