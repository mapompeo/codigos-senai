const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('1pra1', 'root', 'senai', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log(`> Banco de dados autenticado com sucesso.`)
}).catch((err) => {
    console.error(`X Erro ao autenticar banco de dados: Erro: ${err}`)
})

module.exports = sequelize