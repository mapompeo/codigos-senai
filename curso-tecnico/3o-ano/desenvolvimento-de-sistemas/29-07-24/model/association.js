const Users = require('./user.js')
const Adress = require('./adress.js')

Users.hasOne(Adress, {
    foreignKey: 'clientId',
    as: 'Adress',
    onDelete: 'CASCADE'
})

Adress.belongsTo(Users, {
    foreignKey: 'clientId',
    as: 'sers',
    allowNull: false
})

module.exports = { Users, Adress }