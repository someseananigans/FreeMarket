const { Sequelize } = require('sequelize')
// Use process.env.JAWSDB_URL || process.env.LOCAL_URL when .env is incorporated
const sequelize = new Sequelize('mysql://root:rootroot@localhost/freemarket_db')

module.exports = sequelize

