const { DataTypes } = require('sequelize')
const database = require('../database/connection.js')

const cadastro = database.define('cadastros', {
    nome: {
        type: DataTypes.STRING(30)
    },
    idade: {
        type: DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false
})

//cadastro.type({force: true})

module.exports = cadastro