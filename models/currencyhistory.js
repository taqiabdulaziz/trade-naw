'use strict';
module.exports = (sequelize, DataTypes) => {
  const CurrencyHistory = sequelize.define('CurrencyHistory', {
    name: DataTypes.STRING,
    buyPrice: DataTypes.INTEGER,
    sellPrice: DataTypes.INTEGER
  }, {});
  CurrencyHistory.associate = function(models) {
    
    // associations can be defined here
  };
  return CurrencyHistory;
};