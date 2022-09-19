'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {


  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init({
    name_role: {
      type: DataTypes.STRING,
      }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'role',
  });
 
  Role.associate = function(models){
    Role.hasMany(models.user, {
      foreignKey: 'roleId',
      as: 'user'
    }) 
  }
  return Role;
};