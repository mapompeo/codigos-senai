const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fabricanteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    }
},
    {
        tableName: 'produtos',
        timestamps: false
    })
module.exports = Produto