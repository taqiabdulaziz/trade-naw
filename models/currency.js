'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    name: DataTypes.STRING,
    buyPrice: DataTypes.INTEGER,
    sellPrice: DataTypes.INTEGER
  }, {});
  Currency.associate = function (models) {
    Currency.belongsToMany(models.User, { through: models.TransactionB2B })
    Currency.hasMany(models.TransactionB2B)
    Currency.hasMany(models.Request)
    
  };
  Currency.getSymbol = function (data) {
    const money = {
      SGD: `S$`,
      USD: `$`,
      EUR: `€`,
      HKD: `HK$`,
      CHF: `CHF`
    }
    for (const key in money) {
      if (data == key) {
        return money[key]
      }
    }
  }

  return Currency;
};