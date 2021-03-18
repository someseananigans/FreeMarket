const { Sequelize } = require('sequelize')

// change msql://root.... to process.env.JAWSDB_URL || process.env.LOCAL_URL and make .env
module.exports = new Sequelize('mysql://root:rootroot@localhost/freemarket_db')

