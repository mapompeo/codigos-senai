const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('clientes', {
    codCliente: {
        type: DataTypes.INTEGER(9),
        primaryKey: true,
        autoIncrement: true,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
}, {
    tableName: 'clientes',
    timestamps: false
})

module.exports = Cliente