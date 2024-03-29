'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
const hashPassword = async (password) => {
  return bcrypt.hash(password, 10)
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
   return queryInterface.bulkInsert('Users', [
    {
    email: 'agcast01@gmail.com',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date()
   }
   ])


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
