const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('cadastro', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

// sequelize.sync().then(() => {
//     console.log(`Conexão realizada com sucesso!`)
// }).catch((err) => {
//     console.log(`Erro de conexão com o banco de dados! ${err}`)
// })

module.exports = sequelize