'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('roles', [
        { name_role: "admin"},
        { name_role: "user"}
      ], {}),

      /*queryInterface.bulkInsert('user_role', [
        { users_id: 1, role_id: 1 },
        { users_id: 2, role_id: 2 },
        { users_id: 3, role_id: 2 }
      ], {}),*/
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('roles', null, {}),
      //queryInterface.bulkDelete('user_role', null, {})
    ])
  }
};
