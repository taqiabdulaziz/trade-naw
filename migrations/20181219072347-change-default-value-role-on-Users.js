'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn("Users", "role", {}),
    queryInterface.addColumn("Users", "role", {
      type:Sequelize.STRING, 
      defaultValue: "customer"})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "role", {})


    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
