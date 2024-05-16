const { Sequelize } = require('sequelize')
const sequelize =  new Sequelize('db-estudo-backend', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => {
    console.log("Conexão realizada com sucesso ao banco de dados!")
})
.catch((err) => {
    console.error("Erro na conexão com o banco de dados!")
})

module.exports = sequelize