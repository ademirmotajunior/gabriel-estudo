module.exports = (sequelize, DataTypes) => {
    const Tarefa = sequelize.define('Tarefas', {
      name: DataTypes.STRING,
    });
  
    return Tarefa;
  }
  