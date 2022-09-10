'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Localidad.init({
    name: DataTypes.STRING,
    inegi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'localidad',
  });
  
  Localidad.associate = function(models){
    Localidad.hasMany(models.school, {
      foreignKey: 'municipioId',
      as: 'school'
    }); 
  }

  return Localidad;
};