const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const user = db.define('users', {
    id: {
        type: DataTypes.INTEGER(2),
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(30) 
    },
    idade: {
        type: DataTypes.INTEGER(3)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// user.sync({force: true})

module.exports = user