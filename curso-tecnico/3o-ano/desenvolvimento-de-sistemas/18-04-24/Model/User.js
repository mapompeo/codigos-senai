const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const sequelize = require('../db/conn')

const User = db.define('tabelas', {
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

User.sync({force: true})

module.exports = User