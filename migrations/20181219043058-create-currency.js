'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Currencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      buyPrice: {
        type: Sequelize.INTEGER
      },
      sellPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue:new Date,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue:new Date,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Currencies');
  }
};