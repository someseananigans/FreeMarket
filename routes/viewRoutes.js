const router = require('express').Router()
const { join } = require('path')

router.get('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'profile.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/createPost', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'createPost.html'))
})

router.get('/editProfile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'editProfile.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})


module.exports = router
