'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionB2B = sequelize.define('TransactionB2B', {
    CurrencyId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    qtyPrice: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER
  }, {});
  TransactionB2B.associate = function(models) {
    TransactionB2B.belongsTo(models.Currency)
    TransactionB2B.belongsTo(models.User)
    // associations can be defined here
  };

  

  return TransactionB2B;
};