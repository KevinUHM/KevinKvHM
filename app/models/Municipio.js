'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipio extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Municipio.init({
    name: DataTypes.STRING,
    clave: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'municipio',
  });

Municipio.associate = function(models){
    Municipio.hasMany(models.school, {
      foreignKey: 'municipioId',
      as: 'school'
    }); 
  }

  return Municipio;
};