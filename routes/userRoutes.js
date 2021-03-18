const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// GET specific user
// router.get('/user/:username', (req, res) => {
//   User.findOne({ where: { username: req.params.username } })
//     .then(user => res.json(user))
//     .catch(err => res.json(err))
// })


router.get('/users/auth', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.listings)
})

// router.get('/user', passport.authenticate('jwt'), (req, res) => {
//   User.findOne({ where: { id: req.user.id } })
//     .then(user => res.json(user))
//     .catch(err => console.log(err))
// }))


// Add new user (register)
router.post('/user/register', (req, res) => {
  const { name, email, username } = req.body 
  User.register(new User{ name, email, username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  }
})

// Login user
router.post('/user/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    // webtoken (store to represent users login)
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET): null)
  })
})

// Update current user (needs update)
router.put('/user', passport.authenticate('jwt'), (req, res) => {
  User.update(req.body, { where: { id: req.user.id} })
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

// Delete user
router.delete('/user', passport.authenticate('jwt'), (req, res) => {
  User.destroy( { where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
}))


module.exports = router