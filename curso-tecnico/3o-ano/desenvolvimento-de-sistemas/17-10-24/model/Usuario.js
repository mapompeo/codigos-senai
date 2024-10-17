const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Usuario = db.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})

module.exports = Usuario