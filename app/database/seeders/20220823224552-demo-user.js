'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'admin',
      email: 'admin@doe.com',
      password: bcrypt.hashSync("123456", +authConfig.rounds),
      roleId: 1,
      
    },
    {
      username: 'will smith',
      email: 'will@smith.com',
      password: bcrypt.hashSync("123456", +authConfig.rounds),
      roleId: 2,
    },
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};