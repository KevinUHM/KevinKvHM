'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Director.init({
    name: DataTypes.STRING,
    sindicato: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    puesto: DataTypes.STRING,
    email: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    atencion: DataTypes.BOOLEAN,
    supervisorId: {
      type: DataTypes.INTEGER,
      references: {
        //model: 'supervisor',
       model: 'supervisors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'director',
  });


  Director.associate = function(models) {
    Director.belongsTo(models.supervisor, {
      foreignKey: 'supervisorId',
      targetKey: 'id',
      as:'supervisor'
    });
    Director.hasOne(models.school, {
        foreignKey: 'directorId',
        as:'school'
      }); 
  }

  return Director;
};