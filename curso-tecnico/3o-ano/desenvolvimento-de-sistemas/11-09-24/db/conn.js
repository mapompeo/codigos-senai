const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log(`Conectado com o banco de dados`)
})
.catch((err) => {
    console.error(err)
})

module.exports = sequelize