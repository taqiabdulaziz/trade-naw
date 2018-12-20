'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactionp2p = sequelize.define('transactionp2p', {
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    CurrencyId: DataTypes.INTEGER
  }, {});
  transactionp2p.associate = function(models) {
    transactionp2p.belongsTo(models.User)
  };
  return transactionp2p;
};