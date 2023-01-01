const Express = require('express')
const router = new Express
const productController = require('../controllers/productController')

router.post('/', productController.newProd)
router.get('/', productController.getProds)
router.get('/:id', productController.getProd)


module.exports = router