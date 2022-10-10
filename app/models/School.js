'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    name_school: DataTypes.STRING,
    cct: DataTypes.INTEGER,
    nivel: DataTypes.STRING,
    calle: DataTypes.STRING,
    noExterior: DataTypes.INTEGER,
    numeroInterior: DataTypes.STRING,
    asentamiento: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
    },
    localidadId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'localidads',
        key: 'id'
      }
  },
  ubicacionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ubicacions',
        key: 'id'
      }
  },
  directorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'directors',
      key: 'id'
    }
  }
  
  }, {
    sequelize,
    modelName: 'school',
  });

  School.associate = function(models) {
    School.belongsTo(models.user, {
      foreignKey: 'userId',
      targetKey: 'id',
      as: 'usuario'
    });

    School.belongsTo(models.localidad, {
      foreignKey: 'localidadId',
      targetKey: 'id',
      as: 'localidad'});
    
    School.belongsTo(models.ubicacion, {
      foreignKey: 'ubicacionId',
      targetKey: 'id',
      as: 'ubicacion'
    });
    
    School.belongsTo(models.director, {
      foreignKey: 'directorId',
      targetKey: 'id',
      as: 'director'
    });
  }
  
  return School;
};