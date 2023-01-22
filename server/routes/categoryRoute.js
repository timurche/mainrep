const Express = require('express')
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

const router = new Express

router.post('/', checkRole('ADMIN'), categoryController.new)
router.get('/', categoryController.get)

module.exports = router