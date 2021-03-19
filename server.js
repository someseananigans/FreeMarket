require('dotenv').config()
let PORT = 3000

const express = require('express')
const { join } = require('path')
const sequelize = require('./db')
const passport = require('passport')
const { User } = require('./models')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

// New stuff
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
  // ask about  |  where: { id }, include: [Listing]  |
}, ({ id }, cb) => User.findOne({ id })
  .then(user => cb(null, user))
  .catch(err => cb(err))))

app.use(require('./routes'))

sequelize.sync()
  .then(() => app.listen(process.env.PORT || PORT))
  .catch(err => console.log(err))


// where: { id }, include: [Listing]