const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Produto = db.define('produtos', {
    nome: {
        type: DataTypes.STRING(255)
    },
    quantidade: {
        type: DataTypes.INTEGER(4)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// Produto.sync({force: true})

module.exports = Produto