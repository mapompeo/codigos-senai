const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('exercicio', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log(`Conexão com o banco de dados realizada com sucesso`)
}).catch((err) => {
    console.error(err)
})

module.exports = sequelize