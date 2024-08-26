const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Fabricante = db.define('fabricante', {
    codFabricante: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeFabricante: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'fabricantes',
    timestamps: false
})

module.exports = Fabricante