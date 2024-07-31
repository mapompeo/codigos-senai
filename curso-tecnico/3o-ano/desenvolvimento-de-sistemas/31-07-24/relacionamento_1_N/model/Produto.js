const { Datatypes } = require('sequelize')
const db = require('../db/conn.js')

const Produto = db.define('Produto', {
    codProduto: {
        type: Datatypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Datatypes.STRING(45),
        allowNull: false,
    },
    quantidae: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    fabricanteId: {
        type: Datatypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fabricante',
            key: 'codFabricante'
        }
    }
}, {
    tableName: 'produtos',
    createdAt: false,
    updatedAt: false
})

module.exports = Produto