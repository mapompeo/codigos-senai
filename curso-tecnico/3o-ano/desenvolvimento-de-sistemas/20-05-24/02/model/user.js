const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(35)
    },
    idade: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
})

User.sync({force: true})

module.exports = User