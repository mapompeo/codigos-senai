const { Datatypes } = require('sequelize')
const db = require('../db/conn.js')

const Fabricante = db.define('Fabricante', {
    codFabricante: {
        type: Datatypes.LONG,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Datatypes.STRING(45),
        allowNull: false,
    }
}, {
    tableName: 'fabricantes',
    createdAt: false,
    updatedAt: false
})

module.exports = Fabricante