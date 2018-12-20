'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('CurrencyHistories', [
      {
          "id": 1,
          "name": "EUR",
          "buyPrice": 16774,
          "sellPrice": 16445,
          "createdAt": "2018-12-19T09:48:14.309Z",
          "updatedAt": "2018-12-19T09:48:14.312Z"
      },
      {
          "id": 2,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:48:14.654Z",
          "updatedAt": "2018-12-19T09:48:14.654Z"
      },
      {
          "id": 3,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T09:48:15.146Z",
          "updatedAt": "2018-12-19T09:48:15.147Z"
      },
      {
          "id": 4,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T09:49:40.319Z",
          "updatedAt": "2018-12-19T09:49:40.321Z"
      },
      {
          "id": 5,
          "name": "EUR",
          "buyPrice": 16774,
          "sellPrice": 16445,
          "createdAt": "2018-12-19T09:49:41.253Z",
          "updatedAt": "2018-12-19T09:49:41.253Z"
      },
      {
          "id": 6,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:50:31.468Z",
          "updatedAt": "2018-12-19T09:50:31.470Z"
      },
      {
          "id": 7,
          "name": "EUR",
          "buyPrice": 16777,
          "sellPrice": 16448,
          "createdAt": "2018-12-19T09:50:31.539Z",
          "updatedAt": "2018-12-19T09:50:31.539Z"
      },
      {
          "id": 8,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:52:23.264Z",
          "updatedAt": "2018-12-19T09:52:23.264Z"
      },
      {
          "id": 9,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T09:52:23.957Z",
          "updatedAt": "2018-12-19T09:52:23.957Z"
      },
      {
          "id": 10,
          "name": "EUR",
          "buyPrice": 16777,
          "sellPrice": 16448,
          "createdAt": "2018-12-19T09:52:24.501Z",
          "updatedAt": "2018-12-19T09:52:24.501Z"
      },
      {
          "id": 11,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:53:23.235Z",
          "updatedAt": "2018-12-19T09:53:23.235Z"
      },
      {
          "id": 12,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:58:20.743Z",
          "updatedAt": "2018-12-19T09:58:20.744Z"
      },
      {
          "id": 13,
          "name": "EUR",
          "buyPrice": 16771,
          "sellPrice": 16442,
          "createdAt": "2018-12-19T09:58:20.853Z",
          "updatedAt": "2018-12-19T09:58:20.854Z"
      },
      {
          "id": 14,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T09:58:21.276Z",
          "updatedAt": "2018-12-19T09:58:21.276Z"
      },
      {
          "id": 15,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T09:59:27.807Z",
          "updatedAt": "2018-12-19T09:59:27.808Z"
      },
      {
          "id": 16,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T09:59:28.722Z",
          "updatedAt": "2018-12-19T09:59:28.723Z"
      },
      {
          "id": 17,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:02:24.736Z",
          "updatedAt": "2018-12-19T10:02:24.737Z"
      },
      {
          "id": 18,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:02:24.858Z",
          "updatedAt": "2018-12-19T10:02:24.858Z"
      },
      {
          "id": 19,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:02:24.872Z",
          "updatedAt": "2018-12-19T10:02:24.872Z"
      },
      {
          "id": 20,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:03:22.577Z",
          "updatedAt": "2018-12-19T10:03:22.577Z"
      },
      {
          "id": 21,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:03:22.959Z",
          "updatedAt": "2018-12-19T10:03:22.959Z"
      },
      {
          "id": 22,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:03:22.975Z",
          "updatedAt": "2018-12-19T10:03:22.975Z"
      },
      {
          "id": 23,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:04:22.621Z",
          "updatedAt": "2018-12-19T10:04:22.621Z"
      },
      {
          "id": 24,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:04:23.003Z",
          "updatedAt": "2018-12-19T10:04:23.003Z"
      },
      {
          "id": 25,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:04:24.144Z",
          "updatedAt": "2018-12-19T10:04:24.144Z"
      },
      {
          "id": 26,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:05:21.967Z",
          "updatedAt": "2018-12-19T10:05:21.967Z"
      },
      {
          "id": 27,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:05:24.607Z",
          "updatedAt": "2018-12-19T10:05:24.607Z"
      },
      {
          "id": 28,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:06:22.043Z",
          "updatedAt": "2018-12-19T10:06:22.043Z"
      },
      {
          "id": 29,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:06:23.225Z",
          "updatedAt": "2018-12-19T10:06:23.225Z"
      },
      {
          "id": 30,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:08:13.385Z",
          "updatedAt": "2018-12-19T10:08:13.386Z"
      },
      {
          "id": 31,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:08:17.355Z",
          "updatedAt": "2018-12-19T10:08:17.355Z"
      },
      {
          "id": 32,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:09:13.330Z",
          "updatedAt": "2018-12-19T10:09:13.330Z"
      },
      {
          "id": 33,
          "name": "EUR",
          "buyPrice": 16762,
          "sellPrice": 16433,
          "createdAt": "2018-12-19T10:09:13.823Z",
          "updatedAt": "2018-12-19T10:09:13.823Z"
      },
      {
          "id": 34,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:09:14.162Z",
          "updatedAt": "2018-12-19T10:09:14.162Z"
      },
      {
          "id": 35,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:10:13.413Z",
          "updatedAt": "2018-12-19T10:10:13.413Z"
      },
      {
          "id": 36,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:10:14.582Z",
          "updatedAt": "2018-12-19T10:10:14.582Z"
      },
      {
          "id": 37,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:10:16.473Z",
          "updatedAt": "2018-12-19T10:10:16.473Z"
      },
      {
          "id": 38,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:11:13.366Z",
          "updatedAt": "2018-12-19T10:11:13.366Z"
      },
      {
          "id": 39,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:11:14.567Z",
          "updatedAt": "2018-12-19T10:11:14.567Z"
      },
      {
          "id": 40,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:11:15.614Z",
          "updatedAt": "2018-12-19T10:11:15.614Z"
      },
      {
          "id": 41,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:12:14.035Z",
          "updatedAt": "2018-12-19T10:12:14.035Z"
      },
      {
          "id": 42,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:12:14.894Z",
          "updatedAt": "2018-12-19T10:12:14.894Z"
      },
      {
          "id": 43,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:12:18.277Z",
          "updatedAt": "2018-12-19T10:12:18.277Z"
      },
      {
          "id": 44,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:13:13.411Z",
          "updatedAt": "2018-12-19T10:13:13.411Z"
      },
      {
          "id": 45,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:13:15.928Z",
          "updatedAt": "2018-12-19T10:13:15.928Z"
      },
      {
          "id": 46,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:13:16.282Z",
          "updatedAt": "2018-12-19T10:13:16.282Z"
      },
      {
          "id": 47,
          "name": "EUR",
          "buyPrice": 16761,
          "sellPrice": 16432,
          "createdAt": "2018-12-19T10:14:13.435Z",
          "updatedAt": "2018-12-19T10:14:13.435Z"
      },
      {
          "id": 48,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:14:14.317Z",
          "updatedAt": "2018-12-19T10:14:14.317Z"
      },
      {
          "id": 49,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:14:14.886Z",
          "updatedAt": "2018-12-19T10:14:14.886Z"
      },
      {
          "id": 50,
          "name": "EUR",
          "buyPrice": 16764,
          "sellPrice": 16435,
          "createdAt": "2018-12-19T10:15:13.840Z",
          "updatedAt": "2018-12-19T10:15:13.840Z"
      },
      {
          "id": 51,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:15:16.563Z",
          "updatedAt": "2018-12-19T10:15:16.563Z"
      },
      {
          "id": 52,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:15:16.957Z",
          "updatedAt": "2018-12-19T10:15:16.957Z"
      },
      {
          "id": 53,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:16:13.442Z",
          "updatedAt": "2018-12-19T10:16:13.442Z"
      },
      {
          "id": 54,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:16:14.047Z",
          "updatedAt": "2018-12-19T10:16:14.048Z"
      },
      {
          "id": 55,
          "name": "EUR",
          "buyPrice": 16764,
          "sellPrice": 16435,
          "createdAt": "2018-12-19T10:16:14.501Z",
          "updatedAt": "2018-12-19T10:16:14.501Z"
      },
      {
          "id": 56,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:17:15.688Z",
          "updatedAt": "2018-12-19T10:17:15.688Z"
      },
      {
          "id": 57,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:17:15.829Z",
          "updatedAt": "2018-12-19T10:17:15.829Z"
      },
      {
          "id": 58,
          "name": "EUR",
          "buyPrice": 16764,
          "sellPrice": 16435,
          "createdAt": "2018-12-19T10:17:16.598Z",
          "updatedAt": "2018-12-19T10:17:16.598Z"
      },
      {
          "id": 59,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:18:13.417Z",
          "updatedAt": "2018-12-19T10:18:13.417Z"
      },
      {
          "id": 60,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:18:16.903Z",
          "updatedAt": "2018-12-19T10:18:16.904Z"
      },
      {
          "id": 61,
          "name": "EUR",
          "buyPrice": 16764,
          "sellPrice": 16435,
          "createdAt": "2018-12-19T10:19:13.517Z",
          "updatedAt": "2018-12-19T10:19:13.517Z"
      },
      {
          "id": 62,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:19:13.993Z",
          "updatedAt": "2018-12-19T10:19:13.993Z"
      },
      {
          "id": 63,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:19:15.090Z",
          "updatedAt": "2018-12-19T10:19:15.090Z"
      },
      {
          "id": 64,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:20:14.013Z",
          "updatedAt": "2018-12-19T10:20:14.013Z"
      },
      {
          "id": 65,
          "name": "EUR",
          "buyPrice": 16770,
          "sellPrice": 16441,
          "createdAt": "2018-12-19T10:20:14.047Z",
          "updatedAt": "2018-12-19T10:20:14.047Z"
      },
      {
          "id": 66,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:20:16.515Z",
          "updatedAt": "2018-12-19T10:20:16.515Z"
      },
      {
          "id": 67,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:21:14.569Z",
          "updatedAt": "2018-12-19T10:21:14.569Z"
      },
      {
          "id": 68,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:21:15.494Z",
          "updatedAt": "2018-12-19T10:21:15.494Z"
      },
      {
          "id": 69,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:22:13.355Z",
          "updatedAt": "2018-12-19T10:22:13.355Z"
      },
      {
          "id": 70,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:22:13.938Z",
          "updatedAt": "2018-12-19T10:22:13.939Z"
      },
      {
          "id": 71,
          "name": "EUR",
          "buyPrice": 16770,
          "sellPrice": 16441,
          "createdAt": "2018-12-19T10:22:14.920Z",
          "updatedAt": "2018-12-19T10:22:14.920Z"
      },
      {
          "id": 72,
          "name": "EUR",
          "buyPrice": 16770,
          "sellPrice": 16441,
          "createdAt": "2018-12-19T10:23:13.421Z",
          "updatedAt": "2018-12-19T10:23:13.421Z"
      },
      {
          "id": 73,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:23:17.738Z",
          "updatedAt": "2018-12-19T10:23:17.738Z"
      },
      {
          "id": 74,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:24:14.086Z",
          "updatedAt": "2018-12-19T10:24:14.086Z"
      },
      {
          "id": 75,
          "name": "EUR",
          "buyPrice": 16770,
          "sellPrice": 16441,
          "createdAt": "2018-12-19T10:24:15.737Z",
          "updatedAt": "2018-12-19T10:24:15.737Z"
      },
      {
          "id": 76,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:24:15.810Z",
          "updatedAt": "2018-12-19T10:24:15.810Z"
      },
      {
          "id": 77,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T10:25:15.147Z",
          "updatedAt": "2018-12-19T10:25:15.147Z"
      },
      {
          "id": 78,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T10:26:13.362Z",
          "updatedAt": "2018-12-19T10:26:13.362Z"
      },
      {
          "id": 79,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:26:13.410Z",
          "updatedAt": "2018-12-19T10:26:13.410Z"
      },
      {
          "id": 80,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:26:14.013Z",
          "updatedAt": "2018-12-19T10:26:14.014Z"
      },
      {
          "id": 81,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:27:13.584Z",
          "updatedAt": "2018-12-19T10:27:13.584Z"
      },
      {
          "id": 82,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T10:27:14.872Z",
          "updatedAt": "2018-12-19T10:27:14.872Z"
      },
      {
          "id": 83,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:27:15.000Z",
          "updatedAt": "2018-12-19T10:27:15.000Z"
      },
      {
          "id": 84,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:28:13.758Z",
          "updatedAt": "2018-12-19T10:28:13.758Z"
      },
      {
          "id": 85,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:28:14.431Z",
          "updatedAt": "2018-12-19T10:28:14.431Z"
      },
      {
          "id": 86,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T10:28:15.502Z",
          "updatedAt": "2018-12-19T10:28:15.502Z"
      },
      {
          "id": 87,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T10:29:14.918Z",
          "updatedAt": "2018-12-19T10:29:14.918Z"
      },
      {
          "id": 88,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:29:14.921Z",
          "updatedAt": "2018-12-19T10:29:14.921Z"
      },
      {
          "id": 89,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:29:15.069Z",
          "updatedAt": "2018-12-19T10:29:15.069Z"
      },
      {
          "id": 90,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T10:30:13.683Z",
          "updatedAt": "2018-12-19T10:30:13.684Z"
      },
      {
          "id": 91,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:30:15.643Z",
          "updatedAt": "2018-12-19T10:30:15.644Z"
      },
      {
          "id": 92,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:31:14.138Z",
          "updatedAt": "2018-12-19T10:31:14.138Z"
      },
      {
          "id": 93,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T10:31:15.433Z",
          "updatedAt": "2018-12-19T10:31:15.433Z"
      },
      {
          "id": 94,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:31:15.491Z",
          "updatedAt": "2018-12-19T10:31:15.491Z"
      },
      {
          "id": 95,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T10:32:13.627Z",
          "updatedAt": "2018-12-19T10:32:13.627Z"
      },
      {
          "id": 96,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:32:14.056Z",
          "updatedAt": "2018-12-19T10:32:14.056Z"
      },
      {
          "id": 97,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:32:15.161Z",
          "updatedAt": "2018-12-19T10:32:15.161Z"
      },
      {
          "id": 98,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:33:13.386Z",
          "updatedAt": "2018-12-19T10:33:13.387Z"
      },
      {
          "id": 99,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T10:33:14.378Z",
          "updatedAt": "2018-12-19T10:33:14.378Z"
      },
      {
          "id": 100,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:33:16.230Z",
          "updatedAt": "2018-12-19T10:33:16.230Z"
      },
      {
          "id": 101,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:34:13.462Z",
          "updatedAt": "2018-12-19T10:34:13.462Z"
      },
      {
          "id": 102,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T10:34:14.355Z",
          "updatedAt": "2018-12-19T10:34:14.356Z"
      },
      {
          "id": 103,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:34:15.677Z",
          "updatedAt": "2018-12-19T10:34:15.677Z"
      },
      {
          "id": 104,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:35:13.646Z",
          "updatedAt": "2018-12-19T10:35:13.646Z"
      },
      {
          "id": 105,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:35:14.074Z",
          "updatedAt": "2018-12-19T10:35:14.074Z"
      },
      {
          "id": 106,
          "name": "EUR",
          "buyPrice": 16788,
          "sellPrice": 16459,
          "createdAt": "2018-12-19T10:35:16.560Z",
          "updatedAt": "2018-12-19T10:35:16.560Z"
      },
      {
          "id": 107,
          "name": "EUR",
          "buyPrice": 16788,
          "sellPrice": 16459,
          "createdAt": "2018-12-19T10:36:13.570Z",
          "updatedAt": "2018-12-19T10:36:13.570Z"
      },
      {
          "id": 108,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:36:14.431Z",
          "updatedAt": "2018-12-19T10:36:14.431Z"
      },
      {
          "id": 109,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:36:14.931Z",
          "updatedAt": "2018-12-19T10:36:14.931Z"
      },
      {
          "id": 110,
          "name": "EUR",
          "buyPrice": 16788,
          "sellPrice": 16459,
          "createdAt": "2018-12-19T10:37:14.847Z",
          "updatedAt": "2018-12-19T10:37:14.847Z"
      },
      {
          "id": 111,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:37:14.930Z",
          "updatedAt": "2018-12-19T10:37:14.930Z"
      },
      {
          "id": 112,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:37:15.474Z",
          "updatedAt": "2018-12-19T10:37:15.474Z"
      },
      {
          "id": 113,
          "name": "EUR",
          "buyPrice": 16788,
          "sellPrice": 16459,
          "createdAt": "2018-12-19T10:38:13.497Z",
          "updatedAt": "2018-12-19T10:38:13.498Z"
      },
      {
          "id": 114,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:38:14.153Z",
          "updatedAt": "2018-12-19T10:38:14.153Z"
      },
      {
          "id": 115,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:38:15.963Z",
          "updatedAt": "2018-12-19T10:38:15.963Z"
      },
      {
          "id": 116,
          "name": "EUR",
          "buyPrice": 16788,
          "sellPrice": 16459,
          "createdAt": "2018-12-19T10:39:14.861Z",
          "updatedAt": "2018-12-19T10:39:14.862Z"
      },
      {
          "id": 117,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:39:14.938Z",
          "updatedAt": "2018-12-19T10:39:14.938Z"
      },
      {
          "id": 118,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:39:15.930Z",
          "updatedAt": "2018-12-19T10:39:15.930Z"
      },
      {
          "id": 119,
          "name": "EUR",
          "buyPrice": 16784,
          "sellPrice": 16455,
          "createdAt": "2018-12-19T10:40:13.328Z",
          "updatedAt": "2018-12-19T10:40:13.328Z"
      },
      {
          "id": 120,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:40:13.534Z",
          "updatedAt": "2018-12-19T10:40:13.534Z"
      },
      {
          "id": 121,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:40:13.917Z",
          "updatedAt": "2018-12-19T10:40:13.918Z"
      },
      {
          "id": 122,
          "name": "EUR",
          "buyPrice": 16784,
          "sellPrice": 16455,
          "createdAt": "2018-12-19T10:41:13.535Z",
          "updatedAt": "2018-12-19T10:41:13.536Z"
      },
      {
          "id": 123,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:41:14.384Z",
          "updatedAt": "2018-12-19T10:41:14.386Z"
      },
      {
          "id": 124,
          "name": "EUR",
          "buyPrice": 16784,
          "sellPrice": 16455,
          "createdAt": "2018-12-19T10:42:15.243Z",
          "updatedAt": "2018-12-19T10:42:15.243Z"
      },
      {
          "id": 125,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:42:15.262Z",
          "updatedAt": "2018-12-19T10:42:15.262Z"
      },
      {
          "id": 126,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:43:15.487Z",
          "updatedAt": "2018-12-19T10:43:15.487Z"
      },
      {
          "id": 127,
          "name": "EUR",
          "buyPrice": 16784,
          "sellPrice": 16455,
          "createdAt": "2018-12-19T10:43:16.151Z",
          "updatedAt": "2018-12-19T10:43:16.151Z"
      },
      {
          "id": 128,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:43:17.264Z",
          "updatedAt": "2018-12-19T10:43:17.264Z"
      },
      {
          "id": 129,
          "name": "EUR",
          "buyPrice": 16784,
          "sellPrice": 16455,
          "createdAt": "2018-12-19T10:44:13.493Z",
          "updatedAt": "2018-12-19T10:44:13.493Z"
      },
      {
          "id": 130,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:44:13.506Z",
          "updatedAt": "2018-12-19T10:44:13.507Z"
      },
      {
          "id": 131,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:44:14.077Z",
          "updatedAt": "2018-12-19T10:44:14.077Z"
      },
      {
          "id": 132,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:45:14.237Z",
          "updatedAt": "2018-12-19T10:45:14.237Z"
      },
      {
          "id": 133,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:45:16.135Z",
          "updatedAt": "2018-12-19T10:45:16.135Z"
      },
      {
          "id": 134,
          "name": "EUR",
          "buyPrice": 16783,
          "sellPrice": 16454,
          "createdAt": "2018-12-19T10:45:16.553Z",
          "updatedAt": "2018-12-19T10:45:16.553Z"
      },
      {
          "id": 135,
          "name": "EUR",
          "buyPrice": 16783,
          "sellPrice": 16454,
          "createdAt": "2018-12-19T10:46:13.431Z",
          "updatedAt": "2018-12-19T10:46:13.432Z"
      },
      {
          "id": 136,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:46:13.993Z",
          "updatedAt": "2018-12-19T10:46:13.993Z"
      },
      {
          "id": 137,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:46:15.221Z",
          "updatedAt": "2018-12-19T10:46:15.221Z"
      },
      {
          "id": 138,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:47:14.024Z",
          "updatedAt": "2018-12-19T10:47:14.024Z"
      },
      {
          "id": 139,
          "name": "EUR",
          "buyPrice": 16783,
          "sellPrice": 16454,
          "createdAt": "2018-12-19T10:47:15.575Z",
          "updatedAt": "2018-12-19T10:47:15.575Z"
      },
      {
          "id": 140,
          "name": "EUR",
          "buyPrice": 16783,
          "sellPrice": 16454,
          "createdAt": "2018-12-19T10:48:13.519Z",
          "updatedAt": "2018-12-19T10:48:13.519Z"
      },
      {
          "id": 141,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:48:15.635Z",
          "updatedAt": "2018-12-19T10:48:15.635Z"
      },
      {
          "id": 142,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:48:17.345Z",
          "updatedAt": "2018-12-19T10:48:17.345Z"
      },
      {
          "id": 143,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:49:13.488Z",
          "updatedAt": "2018-12-19T10:49:13.488Z"
      },
      {
          "id": 144,
          "name": "EUR",
          "buyPrice": 16783,
          "sellPrice": 16454,
          "createdAt": "2018-12-19T10:49:16.197Z",
          "updatedAt": "2018-12-19T10:49:16.197Z"
      },
      {
          "id": 145,
          "name": "EUR",
          "buyPrice": 16779,
          "sellPrice": 16450,
          "createdAt": "2018-12-19T10:50:16.411Z",
          "updatedAt": "2018-12-19T10:50:16.412Z"
      },
      {
          "id": 146,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:50:16.995Z",
          "updatedAt": "2018-12-19T10:50:16.996Z"
      },
      {
          "id": 147,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:51:13.617Z",
          "updatedAt": "2018-12-19T10:51:13.617Z"
      },
      {
          "id": 148,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:51:14.233Z",
          "updatedAt": "2018-12-19T10:51:14.233Z"
      },
      {
          "id": 149,
          "name": "EUR",
          "buyPrice": 16779,
          "sellPrice": 16450,
          "createdAt": "2018-12-19T10:51:16.646Z",
          "updatedAt": "2018-12-19T10:51:16.646Z"
      },
      {
          "id": 150,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T10:52:13.838Z",
          "updatedAt": "2018-12-19T10:52:13.838Z"
      },
      {
          "id": 151,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:52:14.967Z",
          "updatedAt": "2018-12-19T10:52:14.967Z"
      },
      {
          "id": 152,
          "name": "EUR",
          "buyPrice": 16779,
          "sellPrice": 16450,
          "createdAt": "2018-12-19T10:52:15.035Z",
          "updatedAt": "2018-12-19T10:52:15.035Z"
      },
      {
          "id": 153,
          "name": "EUR",
          "buyPrice": 16779,
          "sellPrice": 16450,
          "createdAt": "2018-12-19T10:53:13.429Z",
          "updatedAt": "2018-12-19T10:53:13.429Z"
      },
      {
          "id": 154,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T10:53:14.134Z",
          "updatedAt": "2018-12-19T10:53:14.134Z"
      },
      {
          "id": 155,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T11:00:13.694Z",
          "updatedAt": "2018-12-19T11:00:13.694Z"
      },
      {
          "id": 156,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:00:13.741Z",
          "updatedAt": "2018-12-19T11:00:13.741Z"
      },
      {
          "id": 157,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:00:16.271Z",
          "updatedAt": "2018-12-19T11:00:16.271Z"
      },
      {
          "id": 158,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:01:13.683Z",
          "updatedAt": "2018-12-19T11:01:13.683Z"
      },
      {
          "id": 159,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T11:01:13.710Z",
          "updatedAt": "2018-12-19T11:01:13.710Z"
      },
      {
          "id": 160,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:01:16.903Z",
          "updatedAt": "2018-12-19T11:01:16.903Z"
      },
      {
          "id": 161,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:02:14.167Z",
          "updatedAt": "2018-12-19T11:02:14.168Z"
      },
      {
          "id": 162,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T11:02:14.264Z",
          "updatedAt": "2018-12-19T11:02:14.264Z"
      },
      {
          "id": 163,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:02:14.699Z",
          "updatedAt": "2018-12-19T11:02:14.699Z"
      },
      {
          "id": 164,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:03:13.521Z",
          "updatedAt": "2018-12-19T11:03:13.521Z"
      },
      {
          "id": 165,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:03:14.145Z",
          "updatedAt": "2018-12-19T11:03:14.145Z"
      },
      {
          "id": 166,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T11:03:14.223Z",
          "updatedAt": "2018-12-19T11:03:14.223Z"
      },
      {
          "id": 167,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:04:13.935Z",
          "updatedAt": "2018-12-19T11:04:13.935Z"
      },
      {
          "id": 168,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:04:14.339Z",
          "updatedAt": "2018-12-19T11:04:14.339Z"
      },
      {
          "id": 169,
          "name": "EUR",
          "buyPrice": 16789,
          "sellPrice": 16460,
          "createdAt": "2018-12-19T11:04:14.992Z",
          "updatedAt": "2018-12-19T11:04:14.992Z"
      },
      {
          "id": 170,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:05:14.009Z",
          "updatedAt": "2018-12-19T11:05:14.010Z"
      },
      {
          "id": 171,
          "name": "EUR",
          "buyPrice": 16795,
          "sellPrice": 16466,
          "createdAt": "2018-12-19T11:05:14.091Z",
          "updatedAt": "2018-12-19T11:05:14.091Z"
      },
      {
          "id": 172,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:05:14.176Z",
          "updatedAt": "2018-12-19T11:05:14.176Z"
      },
      {
          "id": 173,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:06:13.520Z",
          "updatedAt": "2018-12-19T11:06:13.520Z"
      },
      {
          "id": 174,
          "name": "EUR",
          "buyPrice": 16795,
          "sellPrice": 16466,
          "createdAt": "2018-12-19T11:06:13.541Z",
          "updatedAt": "2018-12-19T11:06:13.542Z"
      },
      {
          "id": 175,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:06:14.052Z",
          "updatedAt": "2018-12-19T11:06:14.052Z"
      },
      {
          "id": 176,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:07:14.802Z",
          "updatedAt": "2018-12-19T11:07:14.802Z"
      },
      {
          "id": 177,
          "name": "EUR",
          "buyPrice": 16795,
          "sellPrice": 16466,
          "createdAt": "2018-12-19T11:08:13.587Z",
          "updatedAt": "2018-12-19T11:08:13.587Z"
      },
      {
          "id": 178,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:08:13.649Z",
          "updatedAt": "2018-12-19T11:08:13.650Z"
      },
      {
          "id": 179,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:08:14.253Z",
          "updatedAt": "2018-12-19T11:08:14.253Z"
      },
      {
          "id": 180,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:09:14.000Z",
          "updatedAt": "2018-12-19T11:09:14.000Z"
      },
      {
          "id": 181,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:09:14.959Z",
          "updatedAt": "2018-12-19T11:09:14.959Z"
      },
      {
          "id": 182,
          "name": "EUR",
          "buyPrice": 16795,
          "sellPrice": 16466,
          "createdAt": "2018-12-19T11:09:15.511Z",
          "updatedAt": "2018-12-19T11:09:15.511Z"
      },
      {
          "id": 183,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:10:13.532Z",
          "updatedAt": "2018-12-19T11:10:13.532Z"
      },
      {
          "id": 184,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:10:13.546Z",
          "updatedAt": "2018-12-19T11:10:13.547Z"
      },
      {
          "id": 185,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:10:14.157Z",
          "updatedAt": "2018-12-19T11:10:14.157Z"
      },
      {
          "id": 186,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:11:13.487Z",
          "updatedAt": "2018-12-19T11:11:13.487Z"
      },
      {
          "id": 187,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:11:13.661Z",
          "updatedAt": "2018-12-19T11:11:13.661Z"
      },
      {
          "id": 188,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:11:14.141Z",
          "updatedAt": "2018-12-19T11:11:14.141Z"
      },
      {
          "id": 189,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:12:13.544Z",
          "updatedAt": "2018-12-19T11:12:13.544Z"
      },
      {
          "id": 190,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:12:14.019Z",
          "updatedAt": "2018-12-19T11:12:14.020Z"
      },
      {
          "id": 191,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:13:13.951Z",
          "updatedAt": "2018-12-19T11:13:13.951Z"
      },
      {
          "id": 192,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:13:15.593Z",
          "updatedAt": "2018-12-19T11:13:15.593Z"
      },
      {
          "id": 193,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:13:16.556Z",
          "updatedAt": "2018-12-19T11:13:16.556Z"
      },
      {
          "id": 194,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:14:13.477Z",
          "updatedAt": "2018-12-19T11:14:13.477Z"
      },
      {
          "id": 195,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:14:13.561Z",
          "updatedAt": "2018-12-19T11:14:13.561Z"
      },
      {
          "id": 196,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:14:14.105Z",
          "updatedAt": "2018-12-19T11:14:14.106Z"
      },
      {
          "id": 197,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:15:13.654Z",
          "updatedAt": "2018-12-19T11:15:13.654Z"
      },
      {
          "id": 198,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:15:13.848Z",
          "updatedAt": "2018-12-19T11:15:13.848Z"
      },
      {
          "id": 199,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:15:15.359Z",
          "updatedAt": "2018-12-19T11:15:15.360Z"
      },
      {
          "id": 200,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:16:13.581Z",
          "updatedAt": "2018-12-19T11:16:13.581Z"
      },
      {
          "id": 201,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:16:13.875Z",
          "updatedAt": "2018-12-19T11:16:13.875Z"
      },
      {
          "id": 202,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:16:14.190Z",
          "updatedAt": "2018-12-19T11:16:14.190Z"
      },
      {
          "id": 203,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:17:13.496Z",
          "updatedAt": "2018-12-19T11:17:13.497Z"
      },
      {
          "id": 204,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:17:13.527Z",
          "updatedAt": "2018-12-19T11:17:13.527Z"
      },
      {
          "id": 205,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:17:14.091Z",
          "updatedAt": "2018-12-19T11:17:14.091Z"
      },
      {
          "id": 206,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:18:13.660Z",
          "updatedAt": "2018-12-19T11:18:13.660Z"
      },
      {
          "id": 207,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:18:14.764Z",
          "updatedAt": "2018-12-19T11:18:14.764Z"
      },
      {
          "id": 208,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:18:15.917Z",
          "updatedAt": "2018-12-19T11:18:15.917Z"
      },
      {
          "id": 209,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:19:13.500Z",
          "updatedAt": "2018-12-19T11:19:13.500Z"
      },
      {
          "id": 210,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:19:14.228Z",
          "updatedAt": "2018-12-19T11:19:14.228Z"
      },
      {
          "id": 211,
          "name": "EUR",
          "buyPrice": 16790,
          "sellPrice": 16461,
          "createdAt": "2018-12-19T11:19:14.901Z",
          "updatedAt": "2018-12-19T11:19:14.901Z"
      },
      {
          "id": 212,
          "name": "EUR",
          "buyPrice": 16786,
          "sellPrice": 16457,
          "createdAt": "2018-12-19T11:20:13.528Z",
          "updatedAt": "2018-12-19T11:20:13.528Z"
      },
      {
          "id": 213,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:20:13.532Z",
          "updatedAt": "2018-12-19T11:20:13.532Z"
      },
      {
          "id": 214,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:20:16.192Z",
          "updatedAt": "2018-12-19T11:20:16.192Z"
      },
      {
          "id": 215,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:21:13.477Z",
          "updatedAt": "2018-12-19T11:21:13.478Z"
      },
      {
          "id": 216,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:21:14.290Z",
          "updatedAt": "2018-12-19T11:21:14.290Z"
      },
      {
          "id": 217,
          "name": "EUR",
          "buyPrice": 16786,
          "sellPrice": 16457,
          "createdAt": "2018-12-19T11:21:14.537Z",
          "updatedAt": "2018-12-19T11:21:14.538Z"
      },
      {
          "id": 218,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:22:13.615Z",
          "updatedAt": "2018-12-19T11:22:13.615Z"
      },
      {
          "id": 219,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:22:14.190Z",
          "updatedAt": "2018-12-19T11:22:14.190Z"
      },
      {
          "id": 220,
          "name": "EUR",
          "buyPrice": 16786,
          "sellPrice": 16457,
          "createdAt": "2018-12-19T11:23:13.844Z",
          "updatedAt": "2018-12-19T11:23:13.844Z"
      },
      {
          "id": 221,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:23:14.634Z",
          "updatedAt": "2018-12-19T11:23:14.634Z"
      },
      {
          "id": 222,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:23:15.810Z",
          "updatedAt": "2018-12-19T11:23:15.810Z"
      },
      {
          "id": 223,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:24:13.555Z",
          "updatedAt": "2018-12-19T11:24:13.555Z"
      },
      {
          "id": 224,
          "name": "EUR",
          "buyPrice": 16786,
          "sellPrice": 16457,
          "createdAt": "2018-12-19T11:24:13.620Z",
          "updatedAt": "2018-12-19T11:24:13.620Z"
      },
      {
          "id": 225,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:24:15.290Z",
          "updatedAt": "2018-12-19T11:24:15.290Z"
      },
      {
          "id": 226,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:26:59.279Z",
          "updatedAt": "2018-12-19T11:26:59.281Z"
      },
      {
          "id": 227,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:26:59.748Z",
          "updatedAt": "2018-12-19T11:26:59.749Z"
      },
      {
          "id": 228,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T11:27:01.344Z",
          "updatedAt": "2018-12-19T11:27:01.344Z"
      },
      {
          "id": 229,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:29:32.160Z",
          "updatedAt": "2018-12-19T11:29:32.161Z"
      },
      {
          "id": 230,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T11:29:32.848Z",
          "updatedAt": "2018-12-19T11:29:32.848Z"
      },
      {
          "id": 231,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:29:33.526Z",
          "updatedAt": "2018-12-19T11:29:33.526Z"
      },
      {
          "id": 232,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:33:31.010Z",
          "updatedAt": "2018-12-19T11:33:31.011Z"
      },
      {
          "id": 233,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:33:31.786Z",
          "updatedAt": "2018-12-19T11:33:31.786Z"
      },
      {
          "id": 234,
          "name": "EUR",
          "buyPrice": 16777,
          "sellPrice": 16448,
          "createdAt": "2018-12-19T11:33:32.384Z",
          "updatedAt": "2018-12-19T11:33:32.385Z"
      },
      {
          "id": 235,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:34:31.410Z",
          "updatedAt": "2018-12-19T11:34:31.410Z"
      },
      {
          "id": 236,
          "name": "EUR",
          "buyPrice": 16777,
          "sellPrice": 16448,
          "createdAt": "2018-12-19T11:34:32.188Z",
          "updatedAt": "2018-12-19T11:34:32.188Z"
      },
      {
          "id": 237,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:35:31.001Z",
          "updatedAt": "2018-12-19T11:35:31.001Z"
      },
      {
          "id": 238,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T11:35:32.549Z",
          "updatedAt": "2018-12-19T11:35:32.549Z"
      },
      {
          "id": 239,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:36:49.690Z",
          "updatedAt": "2018-12-19T11:36:49.692Z"
      },
      {
          "id": 240,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:36:49.883Z",
          "updatedAt": "2018-12-19T11:36:49.883Z"
      },
      {
          "id": 241,
          "name": "EUR",
          "buyPrice": 16773,
          "sellPrice": 16444,
          "createdAt": "2018-12-19T11:36:50.710Z",
          "updatedAt": "2018-12-19T11:36:50.710Z"
      },
      {
          "id": 242,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T11:38:50.063Z",
          "updatedAt": "2018-12-19T11:38:50.064Z"
      },
      {
          "id": 243,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:38:50.642Z",
          "updatedAt": "2018-12-19T11:38:50.642Z"
      },
      {
          "id": 244,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:38:50.855Z",
          "updatedAt": "2018-12-19T11:38:50.855Z"
      },
      {
          "id": 245,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:40:42.340Z",
          "updatedAt": "2018-12-19T11:40:42.342Z"
      },
      {
          "id": 246,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T11:40:42.696Z",
          "updatedAt": "2018-12-19T11:40:42.696Z"
      },
      {
          "id": 247,
          "name": "EUR",
          "buyPrice": 16780,
          "sellPrice": 16451,
          "createdAt": "2018-12-19T11:40:42.706Z",
          "updatedAt": "2018-12-19T11:40:42.706Z"
      },
      {
          "id": 248,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:40:42.938Z",
          "updatedAt": "2018-12-19T11:40:42.938Z"
      },
      {
          "id": 249,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:41:42.686Z",
          "updatedAt": "2018-12-19T11:41:42.686Z"
      },
      {
          "id": 250,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:41:43.112Z",
          "updatedAt": "2018-12-19T11:41:43.112Z"
      },
      {
          "id": 251,
          "name": "EUR",
          "buyPrice": 16780,
          "sellPrice": 16451,
          "createdAt": "2018-12-19T11:41:43.341Z",
          "updatedAt": "2018-12-19T11:41:43.342Z"
      },
      {
          "id": 252,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T11:41:43.951Z",
          "updatedAt": "2018-12-19T11:41:43.951Z"
      },
      {
          "id": 253,
          "name": "EUR",
          "buyPrice": 16780,
          "sellPrice": 16451,
          "createdAt": "2018-12-19T11:42:42.818Z",
          "updatedAt": "2018-12-19T11:42:42.818Z"
      },
      {
          "id": 254,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:42:43.343Z",
          "updatedAt": "2018-12-19T11:42:43.343Z"
      },
      {
          "id": 255,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:42:43.793Z",
          "updatedAt": "2018-12-19T11:42:43.793Z"
      },
      {
          "id": 256,
          "name": "EUR",
          "buyPrice": 16780,
          "sellPrice": 16451,
          "createdAt": "2018-12-19T11:43:42.008Z",
          "updatedAt": "2018-12-19T11:43:42.008Z"
      },
      {
          "id": 257,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T11:43:42.219Z",
          "updatedAt": "2018-12-19T11:43:42.219Z"
      },
      {
          "id": 258,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:43:42.627Z",
          "updatedAt": "2018-12-19T11:43:42.627Z"
      },
      {
          "id": 259,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:43:43.437Z",
          "updatedAt": "2018-12-19T11:43:43.437Z"
      },
      {
          "id": 260,
          "name": "EUR",
          "buyPrice": 16780,
          "sellPrice": 16451,
          "createdAt": "2018-12-19T11:44:41.985Z",
          "updatedAt": "2018-12-19T11:44:41.985Z"
      },
      {
          "id": 261,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T11:44:42.188Z",
          "updatedAt": "2018-12-19T11:44:42.188Z"
      },
      {
          "id": 262,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:44:43.147Z",
          "updatedAt": "2018-12-19T11:44:43.148Z"
      },
      {
          "id": 263,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:44:45.166Z",
          "updatedAt": "2018-12-19T11:44:45.166Z"
      },
      {
          "id": 264,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:45:42.130Z",
          "updatedAt": "2018-12-19T11:45:42.130Z"
      },
      {
          "id": 265,
          "name": "EUR",
          "buyPrice": 16785,
          "sellPrice": 16456,
          "createdAt": "2018-12-19T11:45:42.183Z",
          "updatedAt": "2018-12-19T11:45:42.183Z"
      },
      {
          "id": 266,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:45:42.197Z",
          "updatedAt": "2018-12-19T11:45:42.197Z"
      },
      {
          "id": 267,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:45:42.561Z",
          "updatedAt": "2018-12-19T11:45:42.561Z"
      },
      {
          "id": 268,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:46:42.135Z",
          "updatedAt": "2018-12-19T11:46:42.135Z"
      },
      {
          "id": 269,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:46:42.136Z",
          "updatedAt": "2018-12-19T11:46:42.136Z"
      },
      {
          "id": 270,
          "name": "EUR",
          "buyPrice": 16785,
          "sellPrice": 16456,
          "createdAt": "2018-12-19T11:46:42.546Z",
          "updatedAt": "2018-12-19T11:46:42.546Z"
      },
      {
          "id": 271,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:46:43.156Z",
          "updatedAt": "2018-12-19T11:46:43.156Z"
      },
      {
          "id": 272,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:47:42.050Z",
          "updatedAt": "2018-12-19T11:47:42.050Z"
      },
      {
          "id": 273,
          "name": "EUR",
          "buyPrice": 16785,
          "sellPrice": 16456,
          "createdAt": "2018-12-19T11:47:42.099Z",
          "updatedAt": "2018-12-19T11:47:42.099Z"
      },
      {
          "id": 274,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:47:42.481Z",
          "updatedAt": "2018-12-19T11:47:42.481Z"
      },
      {
          "id": 275,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:48:42.071Z",
          "updatedAt": "2018-12-19T11:48:42.071Z"
      },
      {
          "id": 276,
          "name": "EUR",
          "buyPrice": 16785,
          "sellPrice": 16456,
          "createdAt": "2018-12-19T11:48:42.102Z",
          "updatedAt": "2018-12-19T11:48:42.102Z"
      },
      {
          "id": 277,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:48:43.966Z",
          "updatedAt": "2018-12-19T11:48:43.966Z"
      },
      {
          "id": 278,
          "name": "EUR",
          "buyPrice": 16785,
          "sellPrice": 16456,
          "createdAt": "2018-12-19T11:49:41.983Z",
          "updatedAt": "2018-12-19T11:49:41.984Z"
      },
      {
          "id": 279,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:49:42.140Z",
          "updatedAt": "2018-12-19T11:49:42.141Z"
      },
      {
          "id": 280,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:49:43.383Z",
          "updatedAt": "2018-12-19T11:49:43.383Z"
      },
      {
          "id": 281,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:49:43.853Z",
          "updatedAt": "2018-12-19T11:49:43.853Z"
      },
      {
          "id": 282,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:50:42.069Z",
          "updatedAt": "2018-12-19T11:50:42.069Z"
      },
      {
          "id": 283,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:50:42.120Z",
          "updatedAt": "2018-12-19T11:50:42.120Z"
      },
      {
          "id": 284,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:50:42.617Z",
          "updatedAt": "2018-12-19T11:50:42.617Z"
      },
      {
          "id": 285,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:50:42.804Z",
          "updatedAt": "2018-12-19T11:50:42.804Z"
      },
      {
          "id": 286,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:51:42.054Z",
          "updatedAt": "2018-12-19T11:51:42.054Z"
      },
      {
          "id": 287,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:51:42.085Z",
          "updatedAt": "2018-12-19T11:51:42.085Z"
      },
      {
          "id": 288,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:51:43.394Z",
          "updatedAt": "2018-12-19T11:51:43.394Z"
      },
      {
          "id": 289,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:51:44.618Z",
          "updatedAt": "2018-12-19T11:51:44.618Z"
      },
      {
          "id": 290,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:52:42.809Z",
          "updatedAt": "2018-12-19T11:52:42.809Z"
      },
      {
          "id": 291,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:52:42.979Z",
          "updatedAt": "2018-12-19T11:52:42.980Z"
      },
      {
          "id": 292,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:52:42.981Z",
          "updatedAt": "2018-12-19T11:52:42.981Z"
      },
      {
          "id": 293,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:52:43.554Z",
          "updatedAt": "2018-12-19T11:52:43.554Z"
      },
      {
          "id": 294,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:53:42.100Z",
          "updatedAt": "2018-12-19T11:53:42.100Z"
      },
      {
          "id": 295,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:53:42.145Z",
          "updatedAt": "2018-12-19T11:53:42.145Z"
      },
      {
          "id": 296,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:53:42.687Z",
          "updatedAt": "2018-12-19T11:53:42.687Z"
      },
      {
          "id": 297,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:54:42.085Z",
          "updatedAt": "2018-12-19T11:54:42.085Z"
      },
      {
          "id": 298,
          "name": "SGD",
          "buyPrice": 10751,
          "sellPrice": 10540,
          "createdAt": "2018-12-19T11:54:42.144Z",
          "updatedAt": "2018-12-19T11:54:42.144Z"
      },
      {
          "id": 299,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:54:42.601Z",
          "updatedAt": "2018-12-19T11:54:42.601Z"
      },
      {
          "id": 300,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:54:43.081Z",
          "updatedAt": "2018-12-19T11:54:43.081Z"
      },
      {
          "id": 301,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:55:42.169Z",
          "updatedAt": "2018-12-19T11:55:42.169Z"
      },
      {
          "id": 302,
          "name": "SGD",
          "buyPrice": 10750,
          "sellPrice": 10539,
          "createdAt": "2018-12-19T11:55:42.802Z",
          "updatedAt": "2018-12-19T11:55:42.802Z"
      },
      {
          "id": 303,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:55:46.222Z",
          "updatedAt": "2018-12-19T11:55:46.222Z"
      },
      {
          "id": 304,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:55:46.780Z",
          "updatedAt": "2018-12-19T11:55:46.780Z"
      },
      {
          "id": 305,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:56:44.826Z",
          "updatedAt": "2018-12-19T11:56:44.826Z"
      },
      {
          "id": 306,
          "name": "SGD",
          "buyPrice": 10750,
          "sellPrice": 10539,
          "createdAt": "2018-12-19T11:56:45.859Z",
          "updatedAt": "2018-12-19T11:56:45.859Z"
      },
      {
          "id": 307,
          "name": "SGD",
          "buyPrice": 10750,
          "sellPrice": 10539,
          "createdAt": "2018-12-19T11:57:44.551Z",
          "updatedAt": "2018-12-19T11:57:44.551Z"
      },
      {
          "id": 308,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:57:45.281Z",
          "updatedAt": "2018-12-19T11:57:45.281Z"
      },
      {
          "id": 309,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:57:45.479Z",
          "updatedAt": "2018-12-19T11:57:45.479Z"
      },
      {
          "id": 310,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:57:47.746Z",
          "updatedAt": "2018-12-19T11:57:47.746Z"
      },
      {
          "id": 311,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:58:42.100Z",
          "updatedAt": "2018-12-19T11:58:42.100Z"
      },
      {
          "id": 312,
          "name": "SGD",
          "buyPrice": 10750,
          "sellPrice": 10539,
          "createdAt": "2018-12-19T11:58:42.187Z",
          "updatedAt": "2018-12-19T11:58:42.188Z"
      },
      {
          "id": 313,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:58:42.258Z",
          "updatedAt": "2018-12-19T11:58:42.258Z"
      },
      {
          "id": 314,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:58:44.084Z",
          "updatedAt": "2018-12-19T11:58:44.084Z"
      },
      {
          "id": 315,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T11:59:42.364Z",
          "updatedAt": "2018-12-19T11:59:42.364Z"
      },
      {
          "id": 316,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T11:59:42.986Z",
          "updatedAt": "2018-12-19T11:59:42.986Z"
      },
      {
          "id": 317,
          "name": "EUR",
          "buyPrice": 16778,
          "sellPrice": 16449,
          "createdAt": "2018-12-19T11:59:43.209Z",
          "updatedAt": "2018-12-19T11:59:43.209Z"
      },
      {
          "id": 318,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:00:42.536Z",
          "updatedAt": "2018-12-19T12:00:42.536Z"
      },
      {
          "id": 319,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:00:42.967Z",
          "updatedAt": "2018-12-19T12:00:42.967Z"
      },
      {
          "id": 320,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:00:42.972Z",
          "updatedAt": "2018-12-19T12:00:42.972Z"
      },
      {
          "id": 321,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:00:42.973Z",
          "updatedAt": "2018-12-19T12:00:42.973Z"
      },
      {
          "id": 322,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:01:42.306Z",
          "updatedAt": "2018-12-19T12:01:42.307Z"
      },
      {
          "id": 323,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:01:42.425Z",
          "updatedAt": "2018-12-19T12:01:42.425Z"
      },
      {
          "id": 324,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:01:43.804Z",
          "updatedAt": "2018-12-19T12:01:43.804Z"
      },
      {
          "id": 325,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:01:44.433Z",
          "updatedAt": "2018-12-19T12:01:44.433Z"
      },
      {
          "id": 326,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:02:42.094Z",
          "updatedAt": "2018-12-19T12:02:42.094Z"
      },
      {
          "id": 327,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:02:42.199Z",
          "updatedAt": "2018-12-19T12:02:42.199Z"
      },
      {
          "id": 328,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:02:42.336Z",
          "updatedAt": "2018-12-19T12:02:42.336Z"
      },
      {
          "id": 329,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:02:42.587Z",
          "updatedAt": "2018-12-19T12:02:42.587Z"
      },
      {
          "id": 330,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:05:25.284Z",
          "updatedAt": "2018-12-19T12:05:25.285Z"
      },
      {
          "id": 331,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:05:25.287Z",
          "updatedAt": "2018-12-19T12:05:25.287Z"
      },
      {
          "id": 332,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:05:25.328Z",
          "updatedAt": "2018-12-19T12:05:25.328Z"
      },
      {
          "id": 333,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:05:25.865Z",
          "updatedAt": "2018-12-19T12:05:25.865Z"
      },
      {
          "id": 334,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:06:25.138Z",
          "updatedAt": "2018-12-19T12:06:25.138Z"
      },
      {
          "id": 335,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:06:25.165Z",
          "updatedAt": "2018-12-19T12:06:25.166Z"
      },
      {
          "id": 336,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:06:25.169Z",
          "updatedAt": "2018-12-19T12:06:25.169Z"
      },
      {
          "id": 337,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:06:26.103Z",
          "updatedAt": "2018-12-19T12:06:26.104Z"
      },
      {
          "id": 338,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:07:41.684Z",
          "updatedAt": "2018-12-19T12:07:41.685Z"
      },
      {
          "id": 339,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:08:41.530Z",
          "updatedAt": "2018-12-19T12:08:41.531Z"
      },
      {
          "id": 340,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:08:41.595Z",
          "updatedAt": "2018-12-19T12:08:41.595Z"
      },
      {
          "id": 341,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:08:41.627Z",
          "updatedAt": "2018-12-19T12:08:41.627Z"
      },
      {
          "id": 342,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:08:41.986Z",
          "updatedAt": "2018-12-19T12:08:41.987Z"
      },
      {
          "id": 343,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:10:56.263Z",
          "updatedAt": "2018-12-19T12:10:56.265Z"
      },
      {
          "id": 344,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:10:56.509Z",
          "updatedAt": "2018-12-19T12:10:56.509Z"
      },
      {
          "id": 345,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:10:56.733Z",
          "updatedAt": "2018-12-19T12:10:56.733Z"
      },
      {
          "id": 346,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:10:58.170Z",
          "updatedAt": "2018-12-19T12:10:58.170Z"
      },
      {
          "id": 347,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:15:39.085Z",
          "updatedAt": "2018-12-19T12:15:39.087Z"
      },
      {
          "id": 348,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:15:39.091Z",
          "updatedAt": "2018-12-19T12:15:39.091Z"
      },
      {
          "id": 349,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:15:39.143Z",
          "updatedAt": "2018-12-19T12:15:39.143Z"
      },
      {
          "id": 350,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:15:39.851Z",
          "updatedAt": "2018-12-19T12:15:39.851Z"
      },
      {
          "id": 351,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:16:37.968Z",
          "updatedAt": "2018-12-19T12:16:37.968Z"
      },
      {
          "id": 352,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:17:37.851Z",
          "updatedAt": "2018-12-19T12:17:37.851Z"
      },
      {
          "id": 353,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:18:37.708Z",
          "updatedAt": "2018-12-19T12:18:37.708Z"
      },
      {
          "id": 354,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:19:37.870Z",
          "updatedAt": "2018-12-19T12:19:37.870Z"
      },
      {
          "id": 355,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:19:38.025Z",
          "updatedAt": "2018-12-19T12:19:38.026Z"
      },
      {
          "id": 356,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:20:38.895Z",
          "updatedAt": "2018-12-19T12:20:38.895Z"
      },
      {
          "id": 357,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:20:38.896Z",
          "updatedAt": "2018-12-19T12:20:38.896Z"
      },
      {
          "id": 358,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:20:40.026Z",
          "updatedAt": "2018-12-19T12:20:40.026Z"
      },
      {
          "id": 359,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:21:38.908Z",
          "updatedAt": "2018-12-19T12:21:38.908Z"
      },
      {
          "id": 360,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:21:38.913Z",
          "updatedAt": "2018-12-19T12:21:38.913Z"
      },
      {
          "id": 361,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:21:39.377Z",
          "updatedAt": "2018-12-19T12:21:39.377Z"
      },
      {
          "id": 362,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:21:39.469Z",
          "updatedAt": "2018-12-19T12:21:39.470Z"
      },
      {
          "id": 363,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:22:38.677Z",
          "updatedAt": "2018-12-19T12:22:38.677Z"
      },
      {
          "id": 364,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:22:38.896Z",
          "updatedAt": "2018-12-19T12:22:38.896Z"
      },
      {
          "id": 365,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:22:39.011Z",
          "updatedAt": "2018-12-19T12:22:39.011Z"
      },
      {
          "id": 366,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:22:39.286Z",
          "updatedAt": "2018-12-19T12:22:39.286Z"
      },
      {
          "id": 367,
          "name": "USD",
          "buyPrice": 14722,
          "sellPrice": 14433,
          "createdAt": "2018-12-19T12:23:40.460Z",
          "updatedAt": "2018-12-19T12:23:40.460Z"
      },
      {
          "id": 368,
          "name": "EUR",
          "buyPrice": 16782,
          "sellPrice": 16453,
          "createdAt": "2018-12-19T12:23:40.620Z",
          "updatedAt": "2018-12-19T12:23:40.620Z"
      },
      {
          "id": 369,
          "name": "SGD",
          "buyPrice": 10749,
          "sellPrice": 10538,
          "createdAt": "2018-12-19T12:23:40.792Z",
          "updatedAt": "2018-12-19T12:23:40.792Z"
      },
      {
          "id": 370,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:23:41.820Z",
          "updatedAt": "2018-12-19T12:23:41.820Z"
      },
      {
          "id": 371,
          "name": "EUR",
          "buyPrice": 16775,
          "sellPrice": 16446,
          "createdAt": "2018-12-19T12:25:17.991Z",
          "updatedAt": "2018-12-19T12:25:17.992Z"
      },
      {
          "id": 372,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:25:18.064Z",
          "updatedAt": "2018-12-19T12:25:18.064Z"
      },
      {
          "id": 373,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T12:25:18.198Z",
          "updatedAt": "2018-12-19T12:25:18.199Z"
      },
      {
          "id": 374,
          "name": "USD",
          "buyPrice": 14724,
          "sellPrice": 14435,
          "createdAt": "2018-12-19T12:25:18.688Z",
          "updatedAt": "2018-12-19T12:25:18.688Z"
      },
      {
          "id": 375,
          "name": "EUR",
          "buyPrice": 16775,
          "sellPrice": 16446,
          "createdAt": "2018-12-19T12:27:34.837Z",
          "updatedAt": "2018-12-19T12:27:34.839Z"
      },
      {
          "id": 376,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T12:27:35.338Z",
          "updatedAt": "2018-12-19T12:27:35.338Z"
      },
      {
          "id": 377,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:27:37.723Z",
          "updatedAt": "2018-12-19T12:27:37.723Z"
      },
      {
          "id": 378,
          "name": "USD",
          "buyPrice": 14724,
          "sellPrice": 14435,
          "createdAt": "2018-12-19T12:27:38.338Z",
          "updatedAt": "2018-12-19T12:27:38.338Z"
      },
      {
          "id": 379,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10541,
          "createdAt": "2018-12-19T12:28:34.811Z",
          "updatedAt": "2018-12-19T12:28:34.811Z"
      },
      {
          "id": 380,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:28:37.407Z",
          "updatedAt": "2018-12-19T12:28:37.407Z"
      },
      {
          "id": 381,
          "name": "SGD",
          "buyPrice": 10752,
          "sellPrice": 10542,
          "createdAt": "2018-12-19T12:31:38.671Z",
          "updatedAt": "2018-12-19T12:31:38.673Z"
      },
      {
          "id": 382,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:32:38.495Z",
          "updatedAt": "2018-12-19T12:32:38.495Z"
      },
      {
          "id": 383,
          "name": "HKD",
          "buyPrice": 1880,
          "sellPrice": 1843,
          "createdAt": "2018-12-19T12:34:19.580Z",
          "updatedAt": "2018-12-19T12:34:19.581Z"
      },
      {
          "id": 384,
          "name": "HKD",
          "buyPrice": 1885,
          "sellPrice": 1848,
          "createdAt": "2018-12-20T06:53:13.542Z",
          "updatedAt": "2018-12-20T06:53:13.544Z"
      },
      {
          "id": 385,
          "name": "SGD",
          "buyPrice": 10770,
          "sellPrice": 10559,
          "createdAt": "2018-12-20T06:53:13.547Z",
          "updatedAt": "2018-12-20T06:53:13.548Z"
      },
      {
          "id": 386,
          "name": "USD",
          "buyPrice": 14770,
          "sellPrice": 14480,
          "createdAt": "2018-12-20T06:53:14.268Z",
          "updatedAt": "2018-12-20T06:53:14.268Z"
      },
      {
          "id": 387,
          "name": "EUR",
          "buyPrice": 16825,
          "sellPrice": 16495,
          "createdAt": "2018-12-20T06:53:13.872Z",
          "updatedAt": "2018-12-20T06:53:13.872Z"
      },
      {
          "id": 388,
          "name": "EUR",
          "buyPrice": 16825,
          "sellPrice": 16495,
          "createdAt": "2018-12-20T06:54:57.825Z",
          "updatedAt": "2018-12-20T06:54:57.827Z"
      },
      {
          "id": 389,
          "name": "SGD",
          "buyPrice": 10770,
          "sellPrice": 10559,
          "createdAt": "2018-12-20T06:54:57.862Z",
          "updatedAt": "2018-12-20T06:54:57.863Z"
      },
      {
          "id": 390,
          "name": "HKD",
          "buyPrice": 1885,
          "sellPrice": 1848,
          "createdAt": "2018-12-20T06:54:58.090Z",
          "updatedAt": "2018-12-20T06:54:58.090Z"
      },
      {
          "id": 391,
          "name": "USD",
          "buyPrice": 14770,
          "sellPrice": 14480,
          "createdAt": "2018-12-20T06:54:58.561Z",
          "updatedAt": "2018-12-20T06:54:58.561Z"
      },
      {
          "id": 392,
          "name": "SGD",
          "buyPrice": 10770,
          "sellPrice": 10559,
          "createdAt": "2018-12-20T06:55:58.685Z",
          "updatedAt": "2018-12-20T06:55:58.685Z"
      },
      {
          "id": 393,
          "name": "HKD",
          "buyPrice": 1885,
          "sellPrice": 1848,
          "createdAt": "2018-12-20T06:56:00.363Z",
          "updatedAt": "2018-12-20T06:56:00.363Z"
      },
      {
          "id": 394,
          "name": "EUR",
          "buyPrice": 16830,
          "sellPrice": 16500,
          "createdAt": "2018-12-20T06:56:00.368Z",
          "updatedAt": "2018-12-20T06:56:00.368Z"
      },
      {
          "id": 395,
          "name": "USD",
          "buyPrice": 14770,
          "sellPrice": 14480,
          "createdAt": "2018-12-20T06:56:00.369Z",
          "updatedAt": "2018-12-20T06:56:00.369Z"
      },
      {
          "id": 396,
          "name": "HKD",
          "buyPrice": 1885,
          "sellPrice": 1848,
          "createdAt": "2018-12-20T06:57:36.583Z",
          "updatedAt": "2018-12-20T06:57:36.585Z"
      },
      {
          "id": 397,
          "name": "EUR",
          "buyPrice": 16830,
          "sellPrice": 16500,
          "createdAt": "2018-12-20T06:57:36.618Z",
          "updatedAt": "2018-12-20T06:57:36.618Z"
      },
      {
          "id": 398,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T06:57:37.066Z",
          "updatedAt": "2018-12-20T06:57:37.067Z"
      },
      {
          "id": 399,
          "name": "SGD",
          "buyPrice": 10770,
          "sellPrice": 10559,
          "createdAt": "2018-12-20T06:57:37.345Z",
          "updatedAt": "2018-12-20T06:57:37.345Z"
      },
      {
          "id": 400,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T06:58:37.158Z",
          "updatedAt": "2018-12-20T06:58:37.158Z"
      },
      {
          "id": 401,
          "name": "SGD",
          "buyPrice": 10770,
          "sellPrice": 10559,
          "createdAt": "2018-12-20T06:58:37.265Z",
          "updatedAt": "2018-12-20T06:58:37.265Z"
      },
      {
          "id": 402,
          "name": "EUR",
          "buyPrice": 16830,
          "sellPrice": 16500,
          "createdAt": "2018-12-20T06:58:39.636Z",
          "updatedAt": "2018-12-20T06:58:39.636Z"
      },
      {
          "id": 403,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:00:55.445Z",
          "updatedAt": "2018-12-20T07:00:55.447Z"
      },
      {
          "id": 404,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:00:56.021Z",
          "updatedAt": "2018-12-20T07:00:56.021Z"
      },
      {
          "id": 405,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T07:00:57.533Z",
          "updatedAt": "2018-12-20T07:00:57.533Z"
      },
      {
          "id": 406,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:00:58.173Z",
          "updatedAt": "2018-12-20T07:00:58.173Z"
      },
      {
          "id": 407,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:01:56.189Z",
          "updatedAt": "2018-12-20T07:01:56.189Z"
      },
      {
          "id": 408,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T07:01:58.699Z",
          "updatedAt": "2018-12-20T07:01:58.699Z"
      },
      {
          "id": 409,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:02:55.451Z",
          "updatedAt": "2018-12-20T07:02:55.451Z"
      },
      {
          "id": 410,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:02:55.546Z",
          "updatedAt": "2018-12-20T07:02:55.546Z"
      },
      {
          "id": 411,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T07:02:55.591Z",
          "updatedAt": "2018-12-20T07:02:55.591Z"
      },
      {
          "id": 412,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:02:56.245Z",
          "updatedAt": "2018-12-20T07:02:56.245Z"
      },
      {
          "id": 413,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:03:55.471Z",
          "updatedAt": "2018-12-20T07:03:55.471Z"
      },
      {
          "id": 414,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T07:03:57.023Z",
          "updatedAt": "2018-12-20T07:03:57.023Z"
      },
      {
          "id": 415,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:03:57.306Z",
          "updatedAt": "2018-12-20T07:03:57.306Z"
      },
      {
          "id": 416,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:04:00.575Z",
          "updatedAt": "2018-12-20T07:04:00.576Z"
      },
      {
          "id": 417,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T07:04:55.570Z",
          "updatedAt": "2018-12-20T07:04:55.570Z"
      },
      {
          "id": 418,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:04:55.647Z",
          "updatedAt": "2018-12-20T07:04:55.648Z"
      },
      {
          "id": 419,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:04:56.704Z",
          "updatedAt": "2018-12-20T07:04:56.704Z"
      },
      {
          "id": 420,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:05:18.712Z",
          "updatedAt": "2018-12-20T07:05:18.712Z"
      },
      {
          "id": 421,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:05:54.956Z",
          "updatedAt": "2018-12-20T07:05:54.956Z"
      },
      {
          "id": 422,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:05:55.821Z",
          "updatedAt": "2018-12-20T07:05:55.821Z"
      },
      {
          "id": 423,
          "name": "EUR",
          "buyPrice": 16848,
          "sellPrice": 16518,
          "createdAt": "2018-12-20T07:05:56.885Z",
          "updatedAt": "2018-12-20T07:05:56.885Z"
      },
      {
          "id": 424,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:05:57.018Z",
          "updatedAt": "2018-12-20T07:05:57.018Z"
      },
      {
          "id": 425,
          "name": "EUR",
          "buyPrice": 16848,
          "sellPrice": 16518,
          "createdAt": "2018-12-20T07:09:04.199Z",
          "updatedAt": "2018-12-20T07:09:04.201Z"
      },
      {
          "id": 426,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:09:04.720Z",
          "updatedAt": "2018-12-20T07:09:04.720Z"
      },
      {
          "id": 427,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:09:06.171Z",
          "updatedAt": "2018-12-20T07:09:06.171Z"
      },
      {
          "id": 428,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:09:07.734Z",
          "updatedAt": "2018-12-20T07:09:07.734Z"
      },
      {
          "id": 429,
          "name": "HKD",
          "buyPrice": 1886,
          "sellPrice": 1849,
          "createdAt": "2018-12-20T07:10:04.088Z",
          "updatedAt": "2018-12-20T07:10:04.088Z"
      },
      {
          "id": 430,
          "name": "SGD",
          "buyPrice": 10775,
          "sellPrice": 10564,
          "createdAt": "2018-12-20T07:10:05.358Z",
          "updatedAt": "2018-12-20T07:10:05.358Z"
      },
      {
          "id": 431,
          "name": "EUR",
          "buyPrice": 16848,
          "sellPrice": 16518,
          "createdAt": "2018-12-20T07:10:05.795Z",
          "updatedAt": "2018-12-20T07:10:05.795Z"
      },
      {
          "id": 432,
          "name": "USD",
          "buyPrice": 14776,
          "sellPrice": 14486,
          "createdAt": "2018-12-20T07:10:06.514Z",
          "updatedAt": "2018-12-20T07:10:06.514Z"
      },
      {
          "id": 433,
          "name": "EUR",
          "buyPrice": 16825,
          "sellPrice": 16495,
          "createdAt": "2018-12-20T07:18:01.622Z",
          "updatedAt": "2018-12-20T07:18:01.624Z"
      },
      {
          "id": 434,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:18:01.714Z",
          "updatedAt": "2018-12-20T07:18:01.715Z"
      },
      {
          "id": 435,
          "name": "SGD",
          "buyPrice": 10758,
          "sellPrice": 10547,
          "createdAt": "2018-12-20T07:18:01.724Z",
          "updatedAt": "2018-12-20T07:18:01.724Z"
      },
      {
          "id": 436,
          "name": "USD",
          "buyPrice": 14744,
          "sellPrice": 14455,
          "createdAt": "2018-12-20T07:18:02.195Z",
          "updatedAt": "2018-12-20T07:18:02.195Z"
      },
      {
          "id": 437,
          "name": "SGD",
          "buyPrice": 10758,
          "sellPrice": 10547,
          "createdAt": "2018-12-20T07:19:15.028Z",
          "updatedAt": "2018-12-20T07:19:15.029Z"
      },
      {
          "id": 438,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:19:15.040Z",
          "updatedAt": "2018-12-20T07:19:15.040Z"
      },
      {
          "id": 439,
          "name": "EUR",
          "buyPrice": 16825,
          "sellPrice": 16495,
          "createdAt": "2018-12-20T07:19:15.065Z",
          "updatedAt": "2018-12-20T07:19:15.065Z"
      },
      {
          "id": 440,
          "name": "USD",
          "buyPrice": 14744,
          "sellPrice": 14455,
          "createdAt": "2018-12-20T07:19:16.938Z",
          "updatedAt": "2018-12-20T07:19:16.938Z"
      },
      {
          "id": 441,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:20:15.079Z",
          "updatedAt": "2018-12-20T07:20:15.079Z"
      },
      {
          "id": 442,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:20:17.797Z",
          "updatedAt": "2018-12-20T07:20:17.797Z"
      },
      {
          "id": 443,
          "name": "EUR",
          "buyPrice": 16827,
          "sellPrice": 16497,
          "createdAt": "2018-12-20T07:20:17.824Z",
          "updatedAt": "2018-12-20T07:20:17.824Z"
      },
      {
          "id": 444,
          "name": "USD",
          "buyPrice": 14744,
          "sellPrice": 14455,
          "createdAt": "2018-12-20T07:20:17.851Z",
          "updatedAt": "2018-12-20T07:20:17.851Z"
      },
      {
          "id": 445,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:21:14.938Z",
          "updatedAt": "2018-12-20T07:21:14.938Z"
      },
      {
          "id": 446,
          "name": "EUR",
          "buyPrice": 16827,
          "sellPrice": 16497,
          "createdAt": "2018-12-20T07:21:15.347Z",
          "updatedAt": "2018-12-20T07:21:15.348Z"
      },
      {
          "id": 447,
          "name": "USD",
          "buyPrice": 14744,
          "sellPrice": 14455,
          "createdAt": "2018-12-20T07:21:15.582Z",
          "updatedAt": "2018-12-20T07:21:15.583Z"
      },
      {
          "id": 448,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:22:14.996Z",
          "updatedAt": "2018-12-20T07:22:14.996Z"
      },
      {
          "id": 449,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:22:15.065Z",
          "updatedAt": "2018-12-20T07:22:15.065Z"
      },
      {
          "id": 450,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:22:15.687Z",
          "updatedAt": "2018-12-20T07:22:15.687Z"
      },
      {
          "id": 451,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:24:28.293Z",
          "updatedAt": "2018-12-20T07:24:28.294Z"
      },
      {
          "id": 452,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:24:28.295Z",
          "updatedAt": "2018-12-20T07:24:28.295Z"
      },
      {
          "id": 453,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:24:28.979Z",
          "updatedAt": "2018-12-20T07:24:28.979Z"
      },
      {
          "id": 454,
          "name": "EUR",
          "buyPrice": 16827,
          "sellPrice": 16497,
          "createdAt": "2018-12-20T07:24:30.484Z",
          "updatedAt": "2018-12-20T07:24:30.484Z"
      },
      {
          "id": 455,
          "name": "EUR",
          "buyPrice": 16829,
          "sellPrice": 16499,
          "createdAt": "2018-12-20T07:25:28.593Z",
          "updatedAt": "2018-12-20T07:25:28.593Z"
      },
      {
          "id": 456,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:25:29.390Z",
          "updatedAt": "2018-12-20T07:25:29.390Z"
      },
      {
          "id": 457,
          "name": "SGD",
          "buyPrice": 10755,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:25:30.339Z",
          "updatedAt": "2018-12-20T07:25:30.340Z"
      },
      {
          "id": 458,
          "name": "SGD",
          "buyPrice": 10755,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:26:28.420Z",
          "updatedAt": "2018-12-20T07:26:28.420Z"
      },
      {
          "id": 459,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:26:28.424Z",
          "updatedAt": "2018-12-20T07:26:28.424Z"
      },
      {
          "id": 460,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:26:28.943Z",
          "updatedAt": "2018-12-20T07:26:28.943Z"
      },
      {
          "id": 461,
          "name": "EUR",
          "buyPrice": 16829,
          "sellPrice": 16499,
          "createdAt": "2018-12-20T07:26:30.153Z",
          "updatedAt": "2018-12-20T07:26:30.153Z"
      },
      {
          "id": 462,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:27:29.319Z",
          "updatedAt": "2018-12-20T07:27:29.319Z"
      },
      {
          "id": 463,
          "name": "EUR",
          "buyPrice": 16829,
          "sellPrice": 16499,
          "createdAt": "2018-12-20T07:27:30.399Z",
          "updatedAt": "2018-12-20T07:27:30.399Z"
      },
      {
          "id": 464,
          "name": "SGD",
          "buyPrice": 10755,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:27:31.629Z",
          "updatedAt": "2018-12-20T07:27:31.629Z"
      },
      {
          "id": 465,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:27:31.805Z",
          "updatedAt": "2018-12-20T07:27:31.805Z"
      },
      {
          "id": 466,
          "name": "EUR",
          "buyPrice": 16829,
          "sellPrice": 16499,
          "createdAt": "2018-12-20T07:28:28.454Z",
          "updatedAt": "2018-12-20T07:28:28.454Z"
      },
      {
          "id": 467,
          "name": "SGD",
          "buyPrice": 10755,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:28:28.457Z",
          "updatedAt": "2018-12-20T07:28:28.457Z"
      },
      {
          "id": 468,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:28:29.387Z",
          "updatedAt": "2018-12-20T07:28:29.387Z"
      },
      {
          "id": 469,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:28:30.845Z",
          "updatedAt": "2018-12-20T07:28:30.845Z"
      },
      {
          "id": 470,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:30:47.886Z",
          "updatedAt": "2018-12-20T07:30:47.887Z"
      },
      {
          "id": 471,
          "name": "SGD",
          "buyPrice": 10754,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:30:47.912Z",
          "updatedAt": "2018-12-20T07:30:47.912Z"
      },
      {
          "id": 472,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:30:47.957Z",
          "updatedAt": "2018-12-20T07:30:47.957Z"
      },
      {
          "id": 473,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:30:48.421Z",
          "updatedAt": "2018-12-20T07:30:48.422Z"
      },
      {
          "id": 474,
          "name": "SGD",
          "buyPrice": 10754,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:31:47.861Z",
          "updatedAt": "2018-12-20T07:31:47.861Z"
      },
      {
          "id": 475,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:31:47.887Z",
          "updatedAt": "2018-12-20T07:31:47.887Z"
      },
      {
          "id": 476,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:31:47.892Z",
          "updatedAt": "2018-12-20T07:31:47.892Z"
      },
      {
          "id": 477,
          "name": "USD",
          "buyPrice": 14742,
          "sellPrice": 14453,
          "createdAt": "2018-12-20T07:31:48.347Z",
          "updatedAt": "2018-12-20T07:31:48.347Z"
      },
      {
          "id": 478,
          "name": "SGD",
          "buyPrice": 10754,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:33:01.132Z",
          "updatedAt": "2018-12-20T07:33:01.133Z"
      },
      {
          "id": 479,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:33:01.176Z",
          "updatedAt": "2018-12-20T07:33:01.176Z"
      },
      {
          "id": 480,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:33:01.236Z",
          "updatedAt": "2018-12-20T07:33:01.236Z"
      },
      {
          "id": 481,
          "name": "USD",
          "buyPrice": 14742,
          "sellPrice": 14453,
          "createdAt": "2018-12-20T07:33:01.824Z",
          "updatedAt": "2018-12-20T07:33:01.824Z"
      },
      {
          "id": 482,
          "name": "SGD",
          "buyPrice": 10754,
          "sellPrice": 10544,
          "createdAt": "2018-12-20T07:34:36.770Z",
          "updatedAt": "2018-12-20T07:34:36.772Z"
      },
      {
          "id": 483,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:34:36.802Z",
          "updatedAt": "2018-12-20T07:34:36.803Z"
      },
      {
          "id": 484,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:34:37.013Z",
          "updatedAt": "2018-12-20T07:34:37.013Z"
      },
      {
          "id": 485,
          "name": "USD",
          "buyPrice": 14742,
          "sellPrice": 14453,
          "createdAt": "2018-12-20T07:34:37.400Z",
          "updatedAt": "2018-12-20T07:34:37.400Z"
      },
      {
          "id": 486,
          "name": "SGD",
          "buyPrice": 10764,
          "sellPrice": 10553,
          "createdAt": "2018-12-20T07:35:36.927Z",
          "updatedAt": "2018-12-20T07:35:36.927Z"
      },
      {
          "id": 487,
          "name": "EUR",
          "buyPrice": 16838,
          "sellPrice": 16508,
          "createdAt": "2018-12-20T07:35:37.042Z",
          "updatedAt": "2018-12-20T07:35:37.042Z"
      },
      {
          "id": 488,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:35:37.041Z",
          "updatedAt": "2018-12-20T07:35:37.041Z"
      },
      {
          "id": 489,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T07:35:37.369Z",
          "updatedAt": "2018-12-20T07:35:37.370Z"
      },
      {
          "id": 490,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T07:38:35.297Z",
          "updatedAt": "2018-12-20T07:38:35.298Z"
      },
      {
          "id": 491,
          "name": "EUR",
          "buyPrice": 16838,
          "sellPrice": 16508,
          "createdAt": "2018-12-20T07:38:35.344Z",
          "updatedAt": "2018-12-20T07:38:35.344Z"
      },
      {
          "id": 492,
          "name": "SGD",
          "buyPrice": 10764,
          "sellPrice": 10553,
          "createdAt": "2018-12-20T07:38:35.547Z",
          "updatedAt": "2018-12-20T07:38:35.547Z"
      },
      {
          "id": 493,
          "name": "USD",
          "buyPrice": 14744,
          "sellPrice": 14455,
          "createdAt": "2018-12-20T07:38:36.037Z",
          "updatedAt": "2018-12-20T07:38:36.037Z"
      },
      {
          "id": 494,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:42:51.169Z",
          "updatedAt": "2018-12-20T07:42:51.170Z"
      },
      {
          "id": 495,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:42:51.707Z",
          "updatedAt": "2018-12-20T07:42:51.707Z"
      },
      {
          "id": 496,
          "name": "SGD",
          "buyPrice": 10756,
          "sellPrice": 10545,
          "createdAt": "2018-12-20T07:42:51.936Z",
          "updatedAt": "2018-12-20T07:42:51.937Z"
      },
      {
          "id": 497,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:42:52.549Z",
          "updatedAt": "2018-12-20T07:42:52.549Z"
      },
      {
          "id": 498,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:43:51.068Z",
          "updatedAt": "2018-12-20T07:43:51.069Z"
      },
      {
          "id": 499,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:43:51.626Z",
          "updatedAt": "2018-12-20T07:43:51.626Z"
      },
      {
          "id": 500,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:43:52.135Z",
          "updatedAt": "2018-12-20T07:43:52.135Z"
      },
      {
          "id": 501,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:46:35.934Z",
          "updatedAt": "2018-12-20T07:46:35.935Z"
      },
      {
          "id": 502,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:46:36.026Z",
          "updatedAt": "2018-12-20T07:46:36.026Z"
      },
      {
          "id": 503,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:46:36.667Z",
          "updatedAt": "2018-12-20T07:46:36.667Z"
      },
      {
          "id": 504,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:46:36.880Z",
          "updatedAt": "2018-12-20T07:46:36.880Z"
      },
      {
          "id": 505,
          "name": "HKD",
          "buyPrice": 1881,
          "sellPrice": 1844,
          "createdAt": "2018-12-20T07:47:35.821Z",
          "updatedAt": "2018-12-20T07:47:35.822Z"
      },
      {
          "id": 506,
          "name": "EUR",
          "buyPrice": 16826,
          "sellPrice": 16496,
          "createdAt": "2018-12-20T07:47:36.002Z",
          "updatedAt": "2018-12-20T07:47:36.002Z"
      },
      {
          "id": 507,
          "name": "SGD",
          "buyPrice": 10757,
          "sellPrice": 10546,
          "createdAt": "2018-12-20T07:47:36.086Z",
          "updatedAt": "2018-12-20T07:47:36.086Z"
      },
      {
          "id": 508,
          "name": "USD",
          "buyPrice": 14739,
          "sellPrice": 14450,
          "createdAt": "2018-12-20T07:47:36.628Z",
          "updatedAt": "2018-12-20T07:47:36.628Z"
      },
      {
          "id": 509,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:03:30.881Z",
          "updatedAt": "2018-12-20T08:03:30.882Z"
      },
      {
          "id": 510,
          "name": "EUR",
          "buyPrice": 16837,
          "sellPrice": 16507,
          "createdAt": "2018-12-20T08:03:31.253Z",
          "updatedAt": "2018-12-20T08:03:31.253Z"
      },
      {
          "id": 511,
          "name": "HKD",
          "buyPrice": 1883,
          "sellPrice": 1846,
          "createdAt": "2018-12-20T08:03:32.982Z",
          "updatedAt": "2018-12-20T08:03:32.982Z"
      },
      {
          "id": 512,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:03:33.049Z",
          "updatedAt": "2018-12-20T08:03:33.049Z"
      },
      {
          "id": 513,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:04:30.946Z",
          "updatedAt": "2018-12-20T08:04:30.946Z"
      },
      {
          "id": 514,
          "name": "HKD",
          "buyPrice": 1883,
          "sellPrice": 1846,
          "createdAt": "2018-12-20T08:04:31.071Z",
          "updatedAt": "2018-12-20T08:04:31.071Z"
      },
      {
          "id": 515,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:04:32.138Z",
          "updatedAt": "2018-12-20T08:04:32.138Z"
      },
      {
          "id": 516,
          "name": "EUR",
          "buyPrice": 16837,
          "sellPrice": 16507,
          "createdAt": "2018-12-20T08:04:34.171Z",
          "updatedAt": "2018-12-20T08:04:34.171Z"
      },
      {
          "id": 517,
          "name": "EUR",
          "buyPrice": 16838,
          "sellPrice": 16508,
          "createdAt": "2018-12-20T08:06:00.903Z",
          "updatedAt": "2018-12-20T08:06:00.904Z"
      },
      {
          "id": 518,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:06:01.082Z",
          "updatedAt": "2018-12-20T08:06:01.082Z"
      },
      {
          "id": 519,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:06:02.284Z",
          "updatedAt": "2018-12-20T08:06:02.284Z"
      },
      {
          "id": 520,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:06:03.061Z",
          "updatedAt": "2018-12-20T08:06:03.061Z"
      },
      {
          "id": 521,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:06:59.731Z",
          "updatedAt": "2018-12-20T08:06:59.731Z"
      },
      {
          "id": 522,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:06:59.934Z",
          "updatedAt": "2018-12-20T08:06:59.934Z"
      },
      {
          "id": 523,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:07:04.935Z",
          "updatedAt": "2018-12-20T08:07:04.935Z"
      },
      {
          "id": 524,
          "name": "EUR",
          "buyPrice": 16838,
          "sellPrice": 16508,
          "createdAt": "2018-12-20T08:07:04.962Z",
          "updatedAt": "2018-12-20T08:07:04.963Z"
      },
      {
          "id": 525,
          "name": "EUR",
          "buyPrice": 16838,
          "sellPrice": 16508,
          "createdAt": "2018-12-20T08:07:59.939Z",
          "updatedAt": "2018-12-20T08:07:59.939Z"
      },
      {
          "id": 526,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:08:00.041Z",
          "updatedAt": "2018-12-20T08:08:00.041Z"
      },
      {
          "id": 527,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:08:01.334Z",
          "updatedAt": "2018-12-20T08:08:01.335Z"
      },
      {
          "id": 528,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:08:01.689Z",
          "updatedAt": "2018-12-20T08:08:01.689Z"
      },
      {
          "id": 529,
          "name": "SGD",
          "buyPrice": 10773,
          "sellPrice": 10562,
          "createdAt": "2018-12-20T08:10:15.591Z",
          "updatedAt": "2018-12-20T08:10:15.592Z"
      },
      {
          "id": 530,
          "name": "EUR",
          "buyPrice": 16847,
          "sellPrice": 16517,
          "createdAt": "2018-12-20T08:10:15.620Z",
          "updatedAt": "2018-12-20T08:10:15.620Z"
      },
      {
          "id": 531,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:10:16.955Z",
          "updatedAt": "2018-12-20T08:10:16.955Z"
      },
      {
          "id": 532,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:10:17.071Z",
          "updatedAt": "2018-12-20T08:10:17.071Z"
      },
      {
          "id": 533,
          "name": "SGD",
          "buyPrice": 10773,
          "sellPrice": 10562,
          "createdAt": "2018-12-20T08:11:14.859Z",
          "updatedAt": "2018-12-20T08:11:14.859Z"
      },
      {
          "id": 534,
          "name": "USD",
          "buyPrice": 14759,
          "sellPrice": 14470,
          "createdAt": "2018-12-20T08:11:15.111Z",
          "updatedAt": "2018-12-20T08:11:15.112Z"
      },
      {
          "id": 535,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:11:17.524Z",
          "updatedAt": "2018-12-20T08:11:17.524Z"
      },
      {
          "id": 536,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:12:14.472Z",
          "updatedAt": "2018-12-20T08:12:14.472Z"
      },
      {
          "id": 537,
          "name": "SGD",
          "buyPrice": 10773,
          "sellPrice": 10562,
          "createdAt": "2018-12-20T08:12:16.445Z",
          "updatedAt": "2018-12-20T08:12:16.445Z"
      },
      {
          "id": 538,
          "name": "USD",
          "buyPrice": 14754,
          "sellPrice": 14465,
          "createdAt": "2018-12-20T08:12:18.525Z",
          "updatedAt": "2018-12-20T08:12:18.526Z"
      },
      {
          "id": 539,
          "name": "SGD",
          "buyPrice": 10773,
          "sellPrice": 10562,
          "createdAt": "2018-12-20T08:13:14.550Z",
          "updatedAt": "2018-12-20T08:13:14.550Z"
      },
      {
          "id": 540,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:13:14.589Z",
          "updatedAt": "2018-12-20T08:13:14.589Z"
      },
      {
          "id": 541,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:13:15.001Z",
          "updatedAt": "2018-12-20T08:13:15.002Z"
      },
      {
          "id": 542,
          "name": "EUR",
          "buyPrice": 16847,
          "sellPrice": 16517,
          "createdAt": "2018-12-20T08:13:17.439Z",
          "updatedAt": "2018-12-20T08:13:17.439Z"
      },
      {
          "id": 543,
          "name": "HKD",
          "buyPrice": 1884,
          "sellPrice": 1847,
          "createdAt": "2018-12-20T08:14:14.458Z",
          "updatedAt": "2018-12-20T08:14:14.458Z"
      },
      {
          "id": 544,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:14:15.698Z",
          "updatedAt": "2018-12-20T08:14:15.698Z"
      },
      {
          "id": 545,
          "name": "SGD",
          "buyPrice": 10773,
          "sellPrice": 10562,
          "createdAt": "2018-12-20T08:14:16.618Z",
          "updatedAt": "2018-12-20T08:14:16.618Z"
      },
      {
          "id": 546,
          "name": "EUR",
          "buyPrice": 16847,
          "sellPrice": 16517,
          "createdAt": "2018-12-20T08:14:17.434Z",
          "updatedAt": "2018-12-20T08:14:17.434Z"
      },
      {
          "id": 547,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:15:15.699Z",
          "updatedAt": "2018-12-20T08:15:15.699Z"
      },
      {
          "id": 548,
          "name": "EUR",
          "buyPrice": 16839,
          "sellPrice": 16509,
          "createdAt": "2018-12-20T08:15:17.464Z",
          "updatedAt": "2018-12-20T08:15:17.464Z"
      },
      {
          "id": 549,
          "name": "SGD",
          "buyPrice": 10766,
          "sellPrice": 10555,
          "createdAt": "2018-12-20T08:15:17.756Z",
          "updatedAt": "2018-12-20T08:15:17.756Z"
      },
      {
          "id": 550,
          "name": "EUR",
          "buyPrice": 16839,
          "sellPrice": 16509,
          "createdAt": "2018-12-20T08:16:14.412Z",
          "updatedAt": "2018-12-20T08:16:14.412Z"
      },
      {
          "id": 551,
          "name": "SGD",
          "buyPrice": 10766,
          "sellPrice": 10555,
          "createdAt": "2018-12-20T08:16:14.818Z",
          "updatedAt": "2018-12-20T08:16:14.818Z"
      },
      {
          "id": 552,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:16:14.901Z",
          "updatedAt": "2018-12-20T08:16:14.901Z"
      },
      {
          "id": 553,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:16:15.018Z",
          "updatedAt": "2018-12-20T08:16:15.018Z"
      },
      {
          "id": 554,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:17:14.564Z",
          "updatedAt": "2018-12-20T08:17:14.564Z"
      },
      {
          "id": 555,
          "name": "SGD",
          "buyPrice": 10766,
          "sellPrice": 10555,
          "createdAt": "2018-12-20T08:17:14.575Z",
          "updatedAt": "2018-12-20T08:17:14.575Z"
      },
      {
          "id": 556,
          "name": "EUR",
          "buyPrice": 16839,
          "sellPrice": 16509,
          "createdAt": "2018-12-20T08:17:15.701Z",
          "updatedAt": "2018-12-20T08:17:15.701Z"
      },
      {
          "id": 557,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:17:16.047Z",
          "updatedAt": "2018-12-20T08:17:16.047Z"
      },
      {
          "id": 558,
          "name": "EUR",
          "buyPrice": 16839,
          "sellPrice": 16509,
          "createdAt": "2018-12-20T08:19:14.722Z",
          "updatedAt": "2018-12-20T08:19:14.722Z"
      },
      {
          "id": 559,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:19:15.771Z",
          "updatedAt": "2018-12-20T08:19:15.772Z"
      },
      {
          "id": 560,
          "name": "SGD",
          "buyPrice": 10766,
          "sellPrice": 10555,
          "createdAt": "2018-12-20T08:19:17.975Z",
          "updatedAt": "2018-12-20T08:19:17.975Z"
      },
      {
          "id": 561,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:19:17.991Z",
          "updatedAt": "2018-12-20T08:19:17.991Z"
      },
      {
          "id": 562,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:20:14.519Z",
          "updatedAt": "2018-12-20T08:20:14.519Z"
      },
      {
          "id": 563,
          "name": "EUR",
          "buyPrice": 16843,
          "sellPrice": 16513,
          "createdAt": "2018-12-20T08:20:14.552Z",
          "updatedAt": "2018-12-20T08:20:14.553Z"
      },
      {
          "id": 564,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:20:14.644Z",
          "updatedAt": "2018-12-20T08:20:14.644Z"
      },
      {
          "id": 565,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:20:19.198Z",
          "updatedAt": "2018-12-20T08:20:19.198Z"
      },
      {
          "id": 566,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:21:14.515Z",
          "updatedAt": "2018-12-20T08:21:14.515Z"
      },
      {
          "id": 567,
          "name": "EUR",
          "buyPrice": 16843,
          "sellPrice": 16513,
          "createdAt": "2018-12-20T08:21:14.647Z",
          "updatedAt": "2018-12-20T08:21:14.647Z"
      },
      {
          "id": 568,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:21:15.166Z",
          "updatedAt": "2018-12-20T08:21:15.166Z"
      },
      {
          "id": 569,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:21:16.751Z",
          "updatedAt": "2018-12-20T08:21:16.751Z"
      },
      {
          "id": 570,
          "name": "EUR",
          "buyPrice": 16843,
          "sellPrice": 16513,
          "createdAt": "2018-12-20T08:22:15.062Z",
          "updatedAt": "2018-12-20T08:22:15.062Z"
      },
      {
          "id": 571,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:22:15.486Z",
          "updatedAt": "2018-12-20T08:22:15.486Z"
      },
      {
          "id": 572,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:22:15.526Z",
          "updatedAt": "2018-12-20T08:22:15.526Z"
      },
      {
          "id": 573,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:22:18.835Z",
          "updatedAt": "2018-12-20T08:22:18.836Z"
      },
      {
          "id": 574,
          "name": "EUR",
          "buyPrice": 16843,
          "sellPrice": 16513,
          "createdAt": "2018-12-20T08:23:14.470Z",
          "updatedAt": "2018-12-20T08:23:14.471Z"
      },
      {
          "id": 575,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:23:14.474Z",
          "updatedAt": "2018-12-20T08:23:14.474Z"
      },
      {
          "id": 576,
          "name": "SGD",
          "buyPrice": 10767,
          "sellPrice": 10556,
          "createdAt": "2018-12-20T08:23:16.782Z",
          "updatedAt": "2018-12-20T08:23:16.782Z"
      },
      {
          "id": 577,
          "name": "USD",
          "buyPrice": 14749,
          "sellPrice": 14460,
          "createdAt": "2018-12-20T08:23:17.268Z",
          "updatedAt": "2018-12-20T08:23:17.268Z"
      },
      {
          "id": 578,
          "name": "SGD",
          "buyPrice": 10769,
          "sellPrice": 10557,
          "createdAt": "2018-12-20T08:27:15.183Z",
          "updatedAt": "2018-12-20T08:27:15.185Z"
      },
      {
          "id": 579,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:27:15.454Z",
          "updatedAt": "2018-12-20T08:27:15.454Z"
      },
      {
          "id": 580,
          "name": "SGD",
          "buyPrice": 10769,
          "sellPrice": 10557,
          "createdAt": "2018-12-20T08:28:18.110Z",
          "updatedAt": "2018-12-20T08:28:18.110Z"
      },
      {
          "id": 581,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:28:18.131Z",
          "updatedAt": "2018-12-20T08:28:18.131Z"
      },
      {
          "id": 582,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:28:18.632Z",
          "updatedAt": "2018-12-20T08:28:18.632Z"
      },
      {
          "id": 583,
          "name": "EUR",
          "buyPrice": 16849,
          "sellPrice": 16519,
          "createdAt": "2018-12-20T08:28:19.220Z",
          "updatedAt": "2018-12-20T08:28:19.221Z"
      },
      {
          "id": 584,
          "name": "EUR",
          "buyPrice": 16856,
          "sellPrice": 16525,
          "createdAt": "2018-12-20T08:30:40.522Z",
          "updatedAt": "2018-12-20T08:30:40.523Z"
      },
      {
          "id": 585,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:30:40.858Z",
          "updatedAt": "2018-12-20T08:30:40.859Z"
      },
      {
          "id": 586,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:30:41.040Z",
          "updatedAt": "2018-12-20T08:30:41.041Z"
      },
      {
          "id": 587,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:30:42.324Z",
          "updatedAt": "2018-12-20T08:30:42.325Z"
      },
      {
          "id": 588,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:31:40.379Z",
          "updatedAt": "2018-12-20T08:31:40.379Z"
      },
      {
          "id": 589,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:31:40.893Z",
          "updatedAt": "2018-12-20T08:31:40.893Z"
      },
      {
          "id": 590,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:31:41.425Z",
          "updatedAt": "2018-12-20T08:31:41.425Z"
      },
      {
          "id": 591,
          "name": "EUR",
          "buyPrice": 16856,
          "sellPrice": 16525,
          "createdAt": "2018-12-20T08:31:42.767Z",
          "updatedAt": "2018-12-20T08:31:42.767Z"
      },
      {
          "id": 592,
          "name": "EUR",
          "buyPrice": 16856,
          "sellPrice": 16525,
          "createdAt": "2018-12-20T08:32:40.325Z",
          "updatedAt": "2018-12-20T08:32:40.325Z"
      },
      {
          "id": 593,
          "name": "SGD",
          "buyPrice": 10771,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:32:41.671Z",
          "updatedAt": "2018-12-20T08:32:41.672Z"
      },
      {
          "id": 594,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:32:43.598Z",
          "updatedAt": "2018-12-20T08:32:43.598Z"
      },
      {
          "id": 595,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:33:40.333Z",
          "updatedAt": "2018-12-20T08:33:40.334Z"
      },
      {
          "id": 596,
          "name": "EUR",
          "buyPrice": 16856,
          "sellPrice": 16525,
          "createdAt": "2018-12-20T08:33:40.388Z",
          "updatedAt": "2018-12-20T08:33:40.388Z"
      },
      {
          "id": 597,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:33:42.173Z",
          "updatedAt": "2018-12-20T08:33:42.173Z"
      },
      {
          "id": 598,
          "name": "EUR",
          "buyPrice": 16854,
          "sellPrice": 16524,
          "createdAt": "2018-12-20T08:37:42.542Z",
          "updatedAt": "2018-12-20T08:37:42.543Z"
      },
      {
          "id": 599,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10560,
          "createdAt": "2018-12-20T08:37:42.692Z",
          "updatedAt": "2018-12-20T08:37:42.692Z"
      },
      {
          "id": 600,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:37:43.126Z",
          "updatedAt": "2018-12-20T08:37:43.126Z"
      },
      {
          "id": 601,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:37:44.708Z",
          "updatedAt": "2018-12-20T08:37:44.708Z"
      },
      {
          "id": 602,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:38:58.786Z",
          "updatedAt": "2018-12-20T08:38:58.788Z"
      },
      {
          "id": 603,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:40:46.073Z",
          "updatedAt": "2018-12-20T08:40:46.075Z"
      },
      {
          "id": 604,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:40:46.894Z",
          "updatedAt": "2018-12-20T08:40:46.894Z"
      },
      {
          "id": 605,
          "name": "CHF",
          "buyPrice": 14881,
          "sellPrice": 14590,
          "createdAt": "2018-12-20T08:40:47.436Z",
          "updatedAt": "2018-12-20T08:40:47.436Z"
      },
      {
          "id": 606,
          "name": "CHF",
          "buyPrice": 14881,
          "sellPrice": 14590,
          "createdAt": "2018-12-20T08:41:16.050Z",
          "updatedAt": "2018-12-20T08:41:16.050Z"
      },
      {
          "id": 607,
          "name": "EUR",
          "buyPrice": 16851,
          "sellPrice": 16521,
          "createdAt": "2018-12-20T08:41:16.189Z",
          "updatedAt": "2018-12-20T08:41:16.189Z"
      },
      {
          "id": 608,
          "name": "EUR",
          "buyPrice": 16851,
          "sellPrice": 16521,
          "createdAt": "2018-12-20T08:42:31.914Z",
          "updatedAt": "2018-12-20T08:42:31.916Z"
      },
      {
          "id": 614,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:49:33.024Z",
          "updatedAt": "2018-12-20T08:49:33.025Z"
      },
      {
          "id": 615,
          "name": "GBP",
          "buyPrice": 18661,
          "sellPrice": 18295,
          "createdAt": "2018-12-20T08:49:33.126Z",
          "updatedAt": "2018-12-20T08:49:33.126Z"
      },
      {
          "id": 616,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:49:34.316Z",
          "updatedAt": "2018-12-20T08:49:34.317Z"
      },
      {
          "id": 617,
          "name": "EUR",
          "buyPrice": 16851,
          "sellPrice": 16521,
          "createdAt": "2018-12-20T08:50:02.963Z",
          "updatedAt": "2018-12-20T08:50:02.963Z"
      },
      {
          "id": 618,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:50:03.077Z",
          "updatedAt": "2018-12-20T08:50:03.077Z"
      },
      {
          "id": 619,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:51:03.172Z",
          "updatedAt": "2018-12-20T08:51:03.172Z"
      },
      {
          "id": 620,
          "name": "EUR",
          "buyPrice": 16850,
          "sellPrice": 16520,
          "createdAt": "2018-12-20T08:51:03.215Z",
          "updatedAt": "2018-12-20T08:51:03.215Z"
      },
      {
          "id": 621,
          "name": "EUR",
          "buyPrice": 16850,
          "sellPrice": 16520,
          "createdAt": "2018-12-20T08:51:04.053Z",
          "updatedAt": "2018-12-20T08:51:04.053Z"
      },
      {
          "id": 622,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:51:04.741Z",
          "updatedAt": "2018-12-20T08:51:04.741Z"
      },
      {
          "id": 623,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:55:51.047Z",
          "updatedAt": "2018-12-20T08:55:51.049Z"
      },
      {
          "id": 624,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:00.658Z",
          "updatedAt": "2018-12-20T08:56:00.658Z"
      },
      {
          "id": 625,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:00.968Z",
          "updatedAt": "2018-12-20T08:56:00.969Z"
      },
      {
          "id": 626,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:07.053Z",
          "updatedAt": "2018-12-20T08:56:07.054Z"
      },
      {
          "id": 627,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:07.205Z",
          "updatedAt": "2018-12-20T08:56:07.205Z"
      },
      {
          "id": 628,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:07.425Z",
          "updatedAt": "2018-12-20T08:56:07.425Z"
      },
      {
          "id": 629,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:09.676Z",
          "updatedAt": "2018-12-20T08:56:09.676Z"
      },
      {
          "id": 630,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:09.880Z",
          "updatedAt": "2018-12-20T08:56:09.880Z"
      },
      {
          "id": 631,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:12.204Z",
          "updatedAt": "2018-12-20T08:56:12.205Z"
      },
      {
          "id": 632,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:14.005Z",
          "updatedAt": "2018-12-20T08:56:14.005Z"
      },
      {
          "id": 633,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:15.794Z",
          "updatedAt": "2018-12-20T08:56:15.794Z"
      },
      {
          "id": 634,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:15.911Z",
          "updatedAt": "2018-12-20T08:56:15.911Z"
      },
      {
          "id": 635,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:18.227Z",
          "updatedAt": "2018-12-20T08:56:18.227Z"
      },
      {
          "id": 636,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:18.228Z",
          "updatedAt": "2018-12-20T08:56:18.228Z"
      },
      {
          "id": 637,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:19.609Z",
          "updatedAt": "2018-12-20T08:56:19.610Z"
      },
      {
          "id": 638,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:20.134Z",
          "updatedAt": "2018-12-20T08:56:20.135Z"
      },
      {
          "id": 639,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:21.082Z",
          "updatedAt": "2018-12-20T08:56:21.082Z"
      },
      {
          "id": 640,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:21.098Z",
          "updatedAt": "2018-12-20T08:56:21.098Z"
      },
      {
          "id": 641,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:21.116Z",
          "updatedAt": "2018-12-20T08:56:21.116Z"
      },
      {
          "id": 642,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:21.122Z",
          "updatedAt": "2018-12-20T08:56:21.123Z"
      },
      {
          "id": 643,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:21.649Z",
          "updatedAt": "2018-12-20T08:56:21.649Z"
      },
      {
          "id": 644,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:21.655Z",
          "updatedAt": "2018-12-20T08:56:21.656Z"
      },
      {
          "id": 645,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:21.665Z",
          "updatedAt": "2018-12-20T08:56:21.665Z"
      },
      {
          "id": 646,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:21.687Z",
          "updatedAt": "2018-12-20T08:56:21.687Z"
      },
      {
          "id": 647,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:21.986Z",
          "updatedAt": "2018-12-20T08:56:21.986Z"
      },
      {
          "id": 648,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:23.227Z",
          "updatedAt": "2018-12-20T08:56:23.227Z"
      },
      {
          "id": 649,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:23.761Z",
          "updatedAt": "2018-12-20T08:56:23.762Z"
      },
      {
          "id": 650,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:23.957Z",
          "updatedAt": "2018-12-20T08:56:23.957Z"
      },
      {
          "id": 651,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:26.337Z",
          "updatedAt": "2018-12-20T08:56:26.337Z"
      },
      {
          "id": 652,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:26.967Z",
          "updatedAt": "2018-12-20T08:56:26.967Z"
      },
      {
          "id": 653,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:26.970Z",
          "updatedAt": "2018-12-20T08:56:26.970Z"
      },
      {
          "id": 654,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:26.971Z",
          "updatedAt": "2018-12-20T08:56:26.971Z"
      },
      {
          "id": 655,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:27.015Z",
          "updatedAt": "2018-12-20T08:56:27.015Z"
      },
      {
          "id": 656,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:28.497Z",
          "updatedAt": "2018-12-20T08:56:28.498Z"
      },
      {
          "id": 657,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:30.792Z",
          "updatedAt": "2018-12-20T08:56:30.793Z"
      },
      {
          "id": 658,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:30.794Z",
          "updatedAt": "2018-12-20T08:56:30.794Z"
      },
      {
          "id": 659,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:30.818Z",
          "updatedAt": "2018-12-20T08:56:30.818Z"
      },
      {
          "id": 660,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:30.819Z",
          "updatedAt": "2018-12-20T08:56:30.819Z"
      },
      {
          "id": 661,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:30.820Z",
          "updatedAt": "2018-12-20T08:56:30.820Z"
      },
      {
          "id": 662,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:30.822Z",
          "updatedAt": "2018-12-20T08:56:30.823Z"
      },
      {
          "id": 663,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:31.318Z",
          "updatedAt": "2018-12-20T08:56:31.318Z"
      },
      {
          "id": 664,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:31.476Z",
          "updatedAt": "2018-12-20T08:56:31.476Z"
      },
      {
          "id": 665,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:31.586Z",
          "updatedAt": "2018-12-20T08:56:31.586Z"
      },
      {
          "id": 666,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:32.443Z",
          "updatedAt": "2018-12-20T08:56:32.443Z"
      },
      {
          "id": 667,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:33.038Z",
          "updatedAt": "2018-12-20T08:56:33.038Z"
      },
      {
          "id": 668,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:33.050Z",
          "updatedAt": "2018-12-20T08:56:33.050Z"
      },
      {
          "id": 669,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:33.071Z",
          "updatedAt": "2018-12-20T08:56:33.071Z"
      },
      {
          "id": 670,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:34.663Z",
          "updatedAt": "2018-12-20T08:56:34.663Z"
      },
      {
          "id": 671,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:34.858Z",
          "updatedAt": "2018-12-20T08:56:34.858Z"
      },
      {
          "id": 672,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:34.860Z",
          "updatedAt": "2018-12-20T08:56:34.860Z"
      },
      {
          "id": 673,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:34.865Z",
          "updatedAt": "2018-12-20T08:56:34.865Z"
      },
      {
          "id": 674,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:34.956Z",
          "updatedAt": "2018-12-20T08:56:34.956Z"
      },
      {
          "id": 675,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:35.045Z",
          "updatedAt": "2018-12-20T08:56:35.045Z"
      },
      {
          "id": 676,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:35.347Z",
          "updatedAt": "2018-12-20T08:56:35.347Z"
      },
      {
          "id": 677,
          "name": "EUR",
          "buyPrice": 16852,
          "sellPrice": 16522,
          "createdAt": "2018-12-20T08:56:35.483Z",
          "updatedAt": "2018-12-20T08:56:35.484Z"
      },
      {
          "id": 678,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:37.359Z",
          "updatedAt": "2018-12-20T08:56:37.359Z"
      },
      {
          "id": 679,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:37.363Z",
          "updatedAt": "2018-12-20T08:56:37.363Z"
      },
      {
          "id": 684,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:39.324Z",
          "updatedAt": "2018-12-20T08:56:39.324Z"
      },
      {
          "id": 685,
          "name": "CHF",
          "buyPrice": 14888,
          "sellPrice": 14596,
          "createdAt": "2018-12-20T08:56:42.290Z",
          "updatedAt": "2018-12-20T08:56:42.290Z"
      },
      {
          "id": 680,
          "name": "HKD",
          "buyPrice": 1882,
          "sellPrice": 1845,
          "createdAt": "2018-12-20T08:56:37.364Z",
          "updatedAt": "2018-12-20T08:56:37.364Z"
      },
      {
          "id": 682,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:38.005Z",
          "updatedAt": "2018-12-20T08:56:38.005Z"
      },
      {
          "id": 686,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:42.698Z",
          "updatedAt": "2018-12-20T08:56:42.698Z"
      },
      {
          "id": 683,
          "name": "USD",
          "buyPrice": 14747,
          "sellPrice": 14458,
          "createdAt": "2018-12-20T08:56:38.021Z",
          "updatedAt": "2018-12-20T08:56:38.021Z"
      },
      {
          "id": 687,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:44.009Z",
          "updatedAt": "2018-12-20T08:56:44.009Z"
      },
      {
          "id": 681,
          "name": "GBP",
          "buyPrice": 18663,
          "sellPrice": 18297,
          "createdAt": "2018-12-20T08:56:37.369Z",
          "updatedAt": "2018-12-20T08:56:37.369Z"
      },
      {
          "id": 688,
          "name": "SGD",
          "buyPrice": 10772,
          "sellPrice": 10561,
          "createdAt": "2018-12-20T08:56:45.507Z",
          "updatedAt": "2018-12-20T08:56:45.507Z"
      },
      {
          "id": 689,
          "name": "SGD",
          "buyPrice": 10777,
          "sellPrice": 10566,
          "createdAt": "2018-12-20T09:04:15.058Z",
          "updatedAt": "2018-12-20T09:04:15.059Z"
      },
      {
          "id": 690,
          "name": "HKD",
          "buyPrice": 1883,
          "sellPrice": 1846,
          "createdAt": "2018-12-20T09:04:25.095Z",
          "updatedAt": "2018-12-20T09:04:25.096Z"
      },
      {
          "id": 691,
          "name": "EUR",
          "buyPrice": 16860,
          "sellPrice": 16529,
          "createdAt": "2018-12-20T09:04:38.606Z",
          "updatedAt": "2018-12-20T09:04:38.606Z"
      },
      {
          "id": 692,
          "name": "EUR",
          "buyPrice": 16860,
          "sellPrice": 16529,
          "createdAt": "2018-12-20T09:04:48.562Z",
          "updatedAt": "2018-12-20T09:04:48.562Z"
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('CurrencyHistories', null, {});
  }
};
