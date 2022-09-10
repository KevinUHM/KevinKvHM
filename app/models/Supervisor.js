'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supervisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supervisor.init({
    name: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    recuperado: DataTypes.STRING,
    directorio_recuperado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'supervisor',
  });

  Supervisor.associate = function(models){
    Supervisor.hasMany(models.director, {
      foreignKey: 'supervisorId',
      as: 'director'
    });
  }

  return Supervisor;
};