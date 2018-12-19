'use strict';
const Sequelize = require('sequelize')
const encryptPass = require('../helpers/encyptPassword')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    ktp: DataTypes.STRING,
    email:  {
      type:DataTypes.STRING,
      validate: {
                  isUnique: function (value) {
                    const Op = Sequelize.Op
                    return User.findOne({
                      where: {
                              email: value,
                              id: {
                                   [Op.ne] : this.id
                                  }
                             }
                    })
                    .then((data) => {
                      if (data) {
                        throw new Error('Email has been register')
                      }
                    })
                    .catch((err) => {
                      throw new Error(err)
                    })
                  },
                  isEmail: {
                    args:true,
                    msg:"Invalid input"
                  }
                }
     },
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    role: {
      type:DataTypes.STRING,
      defaultValue: "customer"
    },
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Currency, {through: models.TransactionB2B})
    User.hasMany(models.TransactionB2B)
    // associations can be defined here
  };

  User.beforeCreate((value) => {
    // console.log(value)
    let pass = encryptPass(value.password)
    value.password = pass
    // console.log(pass)
    // value.password = 
  }) 
  return User;
};