const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega', {
    codEntrega: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    local: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'entregas',
    createdAt: false,
    updatedAt: false
})
module.exports = Entrega