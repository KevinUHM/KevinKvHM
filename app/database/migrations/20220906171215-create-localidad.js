'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('localidads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      claveLocOfi: {
        type: Sequelize.INTEGER
      },
      municipioId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'municipios',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
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
    await queryInterface.dropTable('localidads');
  }
};