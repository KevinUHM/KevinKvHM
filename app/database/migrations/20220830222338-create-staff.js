'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      depId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departaments',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffs');
  }
};