const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

// establish user table (syntax for autherization purposes)
const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  email: DataTypes.STRING, unique: true,
  phone: DataTypes.INTEGER,
  username: DataTypes.STRING,
  password: DataTypes.STRING
})

module.exports = User
