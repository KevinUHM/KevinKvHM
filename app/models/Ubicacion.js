'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ubicacion.init({
    longitud: DataTypes.FLOAT,
    latidud: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ubicacion',
  });

 Ubicacion.associate = function(models){
    Ubicacion.hasOne(models.school, {
      foreignKey: 'ubicacionId',
      as: 'school'
    });
  }
  return Ubicacion;
};