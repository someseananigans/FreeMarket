const { Sequelize } = require('sequelize')
// Use process.env.JAWSDB_URL || process.env.LOCAL_URL when .env is incorporated
const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)

module.exports = sequelize

