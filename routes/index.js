const router = require('express').Router()

router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./listingsRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router
