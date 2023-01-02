const Express = require('express')
const router = new Express
const brandController = require('../controllers/brandController')

router.post('/', brandController.new)
router.get('/', brandController.get)

module.exports = router