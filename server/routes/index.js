const Express = require('express')
const router = new Express

const userRouter = require('./userRoute')
const cartRouter = require('./cartRoute')
const cartDetailsRouter = require('./cartDetailsRoute')
const productRouter = require('./productRoute')
const productInfoRouter = require('./productInfoRoute')
const brandRouter = require('./brandRoute')
const categoryRouter = require('./categoryRoute')
const categoryBrandRouter = require('./categoryBrandRoute')
const ratingRouter = require('./ratingRoute')

router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/cart-details', cartDetailsRouter)
router.use('/product', productRouter)
router.use('/product-info', productInfoRouter)
router.use('/brand', brandRouter)
router.use('/category', categoryRouter)
router.use('/brand-category', categoryBrandRouter)
router.use('/rating', ratingRouter)

module.exports = router