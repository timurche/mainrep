const Express = require('express')
const router = new Express
const ratingController = require('../controllers/ratingController')

router.post('/', ratingController.setRate)
router.get('/')

module.exports = router