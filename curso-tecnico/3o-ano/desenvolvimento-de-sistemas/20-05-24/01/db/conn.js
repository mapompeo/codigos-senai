const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_teste', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => {
    console.log(`Servidor conectado com o banco de dados!`)
})
.catch((err) => {
    console.error(`Servidor não se conectou com o banco de dados! ${err}`)
})

module.exports = sequelize