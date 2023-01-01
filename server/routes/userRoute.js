const Express = require('express')
const router = new Express

const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router