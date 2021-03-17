const router = require('express').Router()
const { Listing } = require('../models')

// Get all listings
router.get('/listings', (req, res) => {
  Listing.findAll({})
    .then(listings => res.json(listings))
    .catch(err => res.json(listings))
})

// Get listings by title
router.get('/listings/:title', (req, res) => {
  Listing.findAll({ where: { title: req.params.title } })
    .then(listing => res.json(listing))
    .catch(listing => res.json(err))
})

router.get('/listings/search/:title', (req, res) => {
  Listing.findAll({})
    .then(listing => {
      let searchResults = []
      for (let i = 0; i<listing.length; i++) {
        if (listing[i].title.includes(req.params.title)) {
          searchResults.push(listing[i])
        }
      }
      searchResults.sort((a,b) => (a.createdAt-b.createdAt))
      res.json(searchResults)
    })
    .catch(listing => res.json(err))
})

// Get listings by criteria
router.get('/listings/:category', (req, res) => {
  Listing.findAll({ where: { category: req.params.category } })
    .then(listing => res.json(listing))
    .catch(listing => res.json(err))
})

// Get listings by tag
router.get('/listings/tagsearch/:tag', (req, res) => {
  Listing.findAll({})
    .then(listing => {
      let searchResults = []
      for (let i = 0; i < listing.length; i++) {
        if (listing[i].tag.includes(req.params.tag)) {
          searchResults.push(listing[i])
        }
      }
      searchResults.sort((a, b) => (a.createdAt - b.createdAt))
      res.json(searchResults)
    })
    .catch(listing => res.json(err))
})

// Get user listings
router.get('/listings/:user_id', (req, res) => {
  Listing.findAll({ where: { user_id: req.params.user_id } })
    .then(listing => res.json(listing))
    .catch(listing => res.json(err))
})

// Add new listing
router.post('/listings/:user_id', (req, res) => {
  req.body.user_id = req.params.user_id
  Listing.create(req.body)
  .then(listing => res.json(listing))
  .catch(err => res.json(err))
})

// Update a listing (list unique id)
router.put('/listings/:id', (req, res) => {
  Listing.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

// Delete a listing (list unique id)
router.delete('/listings/:id', (req, res) => {
  Listing.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => res.json(err))
})

module.exports = router