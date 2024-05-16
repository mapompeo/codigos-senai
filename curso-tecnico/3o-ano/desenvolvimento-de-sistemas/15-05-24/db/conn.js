const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('treinando-pesado', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de realizada com sucesso!")
}).catch((err) => {
    console.error("Conexão falhou ao tentar conectar com o banco de dados!")
})

module.exports = sequelize