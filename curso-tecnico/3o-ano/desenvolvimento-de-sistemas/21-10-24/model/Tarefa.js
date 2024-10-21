const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Tarefa = db.define('tarefas', {
    id_tarefa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'usuarios',
            key: 'id_usuario'
        }
    },
    tipo_tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area_tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridade: {
        type: DataTypes.ENUM('Baixa', 'Média', 'Alta'),
        allowNull: false,
        defaultValue: 'Baixa' 
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM('A fazer', 'Fazendo', 'Pronto'),
        allowNull: false,
        defaultValue: 'A fazer'
    }
}, {
    tableName: 'tarefas',
    timestamps: false
})

module.exports = Tarefa