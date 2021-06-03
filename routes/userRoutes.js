const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// get user(listings)
router.get('/user/auth', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.get('/usernames', (req, res) => {
  User.findAll({})
    .then(users => {
      let usernames = []
      users.forEach(user => {
        usernames.push(user.username)
      });
      res.json(usernames)
    })
    .catch(err => res.json(err))
})

// Add new user (register)
router.post('/user/register', (req, res) => {
  const { name, email, phone, username } = req.body
  User.register(new User({ name, email, phone, username }), req.body.password, err => {
    if (err) { console.log(err) }
    User.authenticate()(req.body.username, req.body.password, (err, user) => {
      if (err) { console.log(err) }
      // webtoken (store to represent users login)
      res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
    })
  })
})

// Login user
router.post('/user/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    // webtoken (store to represent users login)
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

// Update current user (needs update)
router.put('/user', passport.authenticate('jwt'), (req, res) => {
  User.update(req.body, { where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

// Delete user
router.delete('/user', passport.authenticate('jwt'), (req, res) => {
  User.destroy({ where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router