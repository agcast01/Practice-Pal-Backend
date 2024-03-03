'use strict';
/** @type {import('sequelize-cli').Migration} */

const getCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const currentTime = new Date()
  const month = months[currentTime.getMonth()]
  return `${month + currentTime.getDate()}`
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING,
        defaultValue: getCurrentDate()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sessions');
  }
};