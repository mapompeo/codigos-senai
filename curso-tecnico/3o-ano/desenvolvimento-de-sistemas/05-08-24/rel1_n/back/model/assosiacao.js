const Fabricante = require('./Fabricante')
const Produto = require('./Produto')

Fabricante.hasMany(Produto, {
    foreignKey: 'codProduto',
    as: 'produtos',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Fabricante, {
    foreignKey: 'codFabricante',
    as: 'fabricantes',
    allowNull: false
})

module.exports = { Fabricante, Produto }