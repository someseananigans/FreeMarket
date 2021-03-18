const User = require('./User.js')
const Listing = require('./Listing.js')

User.hasMany(Item, { foreignKey: 'uid' })
Listing.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Listing }