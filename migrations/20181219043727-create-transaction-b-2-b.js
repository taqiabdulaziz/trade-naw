'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransactionB2Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CurrencyId: {
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      qtyPrice: {
        type: Sequelize.INTEGER
      },
      subTotal: {
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
    return queryInterface.dropTable('TransactionB2Bs');
  }
};