const Pedidos = require('./Pedidos')
const Produtos = require('./Produtos')
const Clientes = require('./Clientes')

Clientes.hasMany(Produtos, {
    foreignKey: 'idCliente',
    as: 'produtos',
    onDelete: 'CASCADE'
})

Produtos.belongsTo(Clientes, {
    foreignKey: 'idCliente',
    as: 'clientes',
    allowNull: false
})

Produtos.hasMany(Pedidos, {
    foreignKey: 'idProduto',
    as: 'pedidos',
    onDelete: 'CASCADE'
})

Pedidos.belongsTo(Produtos, {
    foreignKey: 'idProduto',
    as: 'produtos',
    allowNull: false
})

module.exports = { Pedidos, Produtos, Clientes }