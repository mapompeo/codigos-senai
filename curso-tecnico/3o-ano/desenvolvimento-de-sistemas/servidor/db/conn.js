const { Sequelize } = require("sequelize")

// Código para representar as tabelas do seu banco de dados e fazer a conexão
const sequelize = new Sequelize('servidorfoda', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql' 
})

sequelize.authenticate().then(() => {
    console.log("Conexão realizada com sucesso!")
}).catch((err) => {
    console.error("Não foi possível se conectar ao banco de dados!")
})

module.exports = sequelize