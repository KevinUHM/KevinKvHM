'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipio extends Model {
   static associations(models){}
  }
  Municipio.init({
    name:{
         type: DataTypes.STRING
  }
  },{
    sequelize,
    modelName: 'municipio',
  });

    Municipio.associate = function(models){
    Municipio.hasMany(models.localidad, {
      foreignKey: 'municipioId',
      sourceKey: 'id'
    });

     Municipio.belongsTo(models.region, {
      foreignKey: 'regionId',
      targetId: 'id'
    });
  }

  return Municipio;

};
