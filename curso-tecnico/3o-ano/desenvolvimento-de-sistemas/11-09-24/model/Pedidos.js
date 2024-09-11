const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedidos', {
    codPedido: {
        type: DataTypes.INTEGER(9),
        primaryKey: true,
        autoIncrement: true,
    },
    nomeProduto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quantidadeProduto: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
    precoProduto: {
        type: DataTypes.FLOAT(9,2),
        allowNull: false
    },
    idProduto: {
        type: DataTypes.INTEGER(9),
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
}, {
    tableName: 'pedidos',
    timestamps: false
})

module.exports = Pedido