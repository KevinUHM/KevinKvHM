'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Region.init({
    idRegion: DataTypes.INTEGER,
    region: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'region',
  });

  Region.associate = function(models){
    Region.hasMany(models.school, {
      foreignKey: 'regionId',
      as: 'school'
    });
     
  }

  return Region;
};