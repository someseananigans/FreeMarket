const express = require('express')
const { join } = require('path')
const { Sequelize, DataType, Model } = require('sequelize')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

const sequelize = new Sequelize('mysql://root:rootroot@localhost/zoo_db')

// class >Something< extends Model { }

// Something.init({
//   name: ,
//   email: 
// })

sequelize.sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))