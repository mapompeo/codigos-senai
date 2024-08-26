const Produto = require('./Produto.js')
const Compra = require('./Compra.js')
const Fabricante = require('./Fabricante.js')

Compra.hasMany(Produto, {
    foreignKey: 'compraId',
    model: 'produtos',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Compra, {
    foreignKey: 'compraId',
    as: 'compras',
    allowNull: false
})

Fabricante.hasMany(Produto, {
    foreignKey: 'fabricanteId',
    model: 'produtos',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Fabricante, {
    foreignKey: 'fabricanteId',
    as: 'fabricantes',
    allowNull: false
})

module.exports = { Produto, Fabricante, Compra }