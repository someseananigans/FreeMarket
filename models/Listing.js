const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Listing extends Model { }

Listing.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  user_id: DataTypes.INTEGER
}, { sequelize, modelName: 'listings' })

module.exports = Listing