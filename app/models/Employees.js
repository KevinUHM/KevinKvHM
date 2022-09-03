'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    number_phone: DataTypes.INTEGER,
    oficina: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'employee',
  });

  Employee.associate = function(models) {
    Employee.hasOne(models.user, {
      foreignKey: 'employeeId',
      as: 'user'
    })
  }

  return Employee;
};