'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    UserId: DataTypes.INTEGER,
    amount: {
      type:DataTypes.INTEGER,
      validate: {
        checkAmount: function (value) {
          if (value < 100) {
            throw new Error ('minimum Amount is 100')
          }
        }
      }
    },
    CurrencyId: DataTypes.INTEGER,
    qtyPrice: DataTypes.INTEGER,
    status: {
      type:DataTypes.STRING,
      defaultValue: "unapprove"
    }
  }, {});
  Request.associate = function(models) {
    Request.belongsTo(models.User)
    Request.belongsTo(models.Currency)
    // associations can be defined here
  };

  Request.cleanRequest = function (params) {
    
  }
  return Request;
};