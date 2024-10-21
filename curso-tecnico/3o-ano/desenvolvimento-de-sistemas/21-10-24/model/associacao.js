const Usuario = require('./Usuario.js')
const Tarefa = require('./Tarefa.js')

Usuario.hasMany(Tarefa, {
    foreignKey: 'id_usuario',
    as: 'tarefas',
    onDelete: 'CASCADE'
})

Tarefa.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuarios',
    allowNull: false
})

module.exports = { Tarefa, Usuario }