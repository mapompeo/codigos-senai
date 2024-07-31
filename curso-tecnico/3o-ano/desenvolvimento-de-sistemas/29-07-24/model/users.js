const { DataTypes } = require('sequelize')

const db = require('../db/conn.js')

const Users = db.define('Users', {
    codClient: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    tableName: 'Users',
    createdAt: false,
    updatedAt: false
})

module.exports = Users