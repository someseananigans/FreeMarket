const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Listing extends Model { }

// Create listings Table with columns
Listing.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  user_id: DataTypes.INTEGER
}, { sequelize, modelName: 'listings' })

// Populate table with a row (listing)
Listing.create({
  title: 'title',
  description: 'description',
  image: 'image',
  user_id: '1'
})
  .then(listing => { console.log(listing) })
  .catch(err => console.log(err))

module.exports = Listing