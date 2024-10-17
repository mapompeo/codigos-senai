const Entrega = require('./Entrega')
const Fabricante = require('./Fabricante')
const Produto = require('./Produto')

Entrega.hasMany(Produto, {
    foreignKey: 'entregaId',
    as: 'produtos',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Entrega, {
    foreignKey: 'entregaId',
    as: 'entrega',
    allowNull: false
})
Fabricante.hasMany(Produto, {
    foreignKey: 'fabricanteId',
    as: 'produtos',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Fabricante, {
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    allowNull: false
})
module.exports = { Entrega, Fabricante, Produto }
