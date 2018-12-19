'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    name: DataTypes.STRING,
    buyPrice: DataTypes.INTEGER,
    sellPrice: DataTypes.INTEGER
  }, {});
  Currency.associate = function (models) {
    // Currency.belongsToMany(models.User, { through: models.TransactionB2B })
    // Currency.hasMany(models.TransactionB2B)
    
  };
  return Currency;
};