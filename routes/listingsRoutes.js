const router = require('express').Router()
const { Listing } = require('../models')

// Get all listings
router.get('/listings', (req, res) => {
  Listing.findAll({})
    .then(listings => res.json(listings))
    .catch(err => res.json(listings))
})

// Get specific listings
router.get('/listings/:username', (req, res) => {
  Listing.findAll({ where: { username: req.params.username } })
    .then(listing => res.json(user))
    .catch(listing => res.json(err))
})

// Add new listing
router.post('/listings', (req, res) => {
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