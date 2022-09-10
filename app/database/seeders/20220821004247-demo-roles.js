'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('roles', [
        { name_role: "admin"},
        { name_role: "user"}
      ], {}),

    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('roles', null, {}),
      //queryInterface.bulkDelete('user_role', null, {})
    ])
  }
};
