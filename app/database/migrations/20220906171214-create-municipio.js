'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('municipios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },/*
      claveMun: {
        type: Sequelize.STRING
      },*/
      name: {
        type: Sequelize.INTEGER
      },
      regionId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'regions',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      /*
      localidadId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'localidads',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },*/
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('municipios');
  }
};