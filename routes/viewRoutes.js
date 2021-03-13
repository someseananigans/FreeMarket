const router = require('express').Router()
const { join } = require('path')

router.get('/createpost', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'createpost.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'post.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})


module.exports = router
