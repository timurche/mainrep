const Express = require('express')
const categoryController = require('../controllers/categoryController')
const router = new Express

router.post('/', categoryController.new)
router.get('/', categoryController.get)

module.exports = router