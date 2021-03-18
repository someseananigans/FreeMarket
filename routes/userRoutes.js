const router = require('express').Router()
const { User } = require('../models')

// GET specific user
router.get('/user/:username', (req, res) => {
  User.findOne({ where: { username: req.params.username } })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

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
    res.json(user)
  })
})

// Update current user
router.put('/user/:username', (req, res) => {
  User.update(req.body, { where: { username: req.params.username} })
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

// Delete user
router.delete('/user/:username', (req, res) => {
  User.destroy({ where: { username: req.params.username } })
  .then(() => res.sendStatus(200))
  .catch(err => res.json(err))
})


module.exports = router