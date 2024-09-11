const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produtos', {
    codProduto: {
        type: DataTypes.INTEGER(9),
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER(9),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT(9,2),
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER(9),
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    }
}, {
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto