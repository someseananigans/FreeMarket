const router = require('express').Router()
const { join } = require('path')

router.get('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'profile.html'))
})

router.get('/listing', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'listing.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})


module.exports = router
