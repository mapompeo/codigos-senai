const { DataTypes } = require('sequelize')

const db = require('../db/conn.js')

const Adress = db.define('Adress', {
    codAdress: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    number: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    clientId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'codClient'
        }
    },
},{
    tableName: 'Adress',
    createdAt: false,
    updatedAt: false
})

module.exports = Adress