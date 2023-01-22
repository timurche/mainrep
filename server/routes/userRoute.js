const Express = require('express')
const router = new Express
const authMiddleware = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.auth)

module.exports = router