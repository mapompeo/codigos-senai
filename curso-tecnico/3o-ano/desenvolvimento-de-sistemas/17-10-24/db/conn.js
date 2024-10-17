const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('atividade_17_10', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log(`Banco de dados conectado com sucesso!`)
}).catch((err) => {
    console.error(`Erro ao se conectar com o banco de dados, ${err}`)
})

module.exports = sequelize