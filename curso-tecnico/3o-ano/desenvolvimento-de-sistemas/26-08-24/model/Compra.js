const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Compra = db.define('compra', {
    codCompras: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeProd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidadeProd: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'compras',
    timestamps: false
})

module.exports = Compra