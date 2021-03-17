const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

// Create users Table with columns
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  phone: DataTypes.INTEGER
}, { sequelize, modelName: 'users' })

// Populate table with a row (user)
User.create({
  name: 'name',
  email: 'email@gmail.com',
  username: 'username',
  password: 'password',
  phone: '1234567890'
})
  .then(user => { console.log(user) })
  .catch(err => console.log(err))


module.exports = User