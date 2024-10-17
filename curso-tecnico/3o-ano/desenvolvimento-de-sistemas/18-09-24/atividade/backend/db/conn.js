const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Banco de dados conectado com sucesso!')
}).catch((err) => {
    console.error('Banco de dados não conectado', err)
})

module.exports = sequelize