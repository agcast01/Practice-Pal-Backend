'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }).then(() => {
      queryInterface.addColumn(
        'Sessions',
        'userId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      )
    });

  },
  async down(queryInterface, Sequelize) {
    
    await queryInterface.removeColumn(
      'Sessions',
      'userId'
    ).then( () => {
      return queryInterface.removeColumn(
        'Users',
        'sessionId'
      )
    }  
    ).then(
      () => queryInterface.dropTable('Sessions')
    );
  }
};