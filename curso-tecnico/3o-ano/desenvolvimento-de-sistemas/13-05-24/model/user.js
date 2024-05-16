const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const user = db.define('users', {
    nome: {
        type: DataTypes.STRING(30)
    },
    idade: {
        type: DataTypes.INTEGER
    },
    turma: {
        type: DataTypes.STRING(30)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// user.sync({force: true})
module.exports = user