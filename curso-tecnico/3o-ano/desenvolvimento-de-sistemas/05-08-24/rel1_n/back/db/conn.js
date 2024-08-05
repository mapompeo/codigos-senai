const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('rel1_n', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log(`> Banco de dados autenticado com sucesso`)
}).catch((err) => {
    console.error(`X Erro ao autenticar banco de dados, ${err}`)
})

module.exports = sequelize