'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      staffId: {
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
    await queryInterface.dropTable('departaments');
  }
};