'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     let test
        return queryInterface.bulkInsert('Currencies',[
          {
              "id": 3,
              "name": "EUR",
              "buyPrice": 16851,
              "sellPrice": 16521,
              "createdAt": "2018-12-19T11:33:32.387Z",
              "updatedAt": "2018-12-20T08:42:31.953Z"
          },
          {
              "id": 4,
              "name": "SGD",
              "buyPrice": 10772,
              "sellPrice": 10560,
              "createdAt": "2018-12-19T11:38:50.108Z",
              "updatedAt": "2018-12-20T08:37:42.695Z"
          },
          {
              "id": 1,
              "name": "HKD",
              "buyPrice": 1882,
              "sellPrice": 1845,
              "createdAt": "2018-12-19T11:33:31.052Z",
              "updatedAt": "2018-12-20T08:40:46.111Z"
          },
          {
              "id": 2,
              "name": "USD",
              "buyPrice": 14747,
              "sellPrice": 14458,
              "createdAt": "2018-12-19T11:33:31.790Z",
              "updatedAt": "2018-12-20T08:40:46.898Z"
          },
          {
              "id": 5,
              "name": "CHF",
              "buyPrice": 14881,
              "sellPrice": 14590,
              "createdAt": "2018-12-20T08:40:47.439Z",
              "updatedAt": "2018-12-20T08:41:16.058Z"
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Currencies', null, {});
  }
};
