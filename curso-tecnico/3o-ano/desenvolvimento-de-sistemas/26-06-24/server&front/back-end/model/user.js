const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const User = db.define('users', {
    nome: {
        type: DataTypes.STRING(255)
    },
    idade: {
        type: DataTypes.INTEGER(3)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// User.sync({force: true})

module.exports = User