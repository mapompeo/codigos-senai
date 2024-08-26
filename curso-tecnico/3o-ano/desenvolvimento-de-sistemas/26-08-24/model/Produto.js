const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    compraId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'compras',
            key: 'codCompras'
        }
    },
    fabricanteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    }
}, {
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto