const router = require('express').Router()
const { User } = require('../models')

// GET specific user
router.get('/user/:username', (req, res) => {
  User.findOne({ where: { username: req.params.username } })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// Add new user
router.post('/user', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
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