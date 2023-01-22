const { Rating, Product } = require('../models/models')
const ApiError = require('../error/apiErrors');
const Sequelize = require('../db_connect')
class RatingController {

	async setRate(req, res, next) {
		const { userId, productId, newRate } = req.body;
		let rating = await Rating.findOne({ where: { userId, productId } })
		if (rating) {
			return next(ApiError.badRequest("Alredy rated"))
		}

		rating = await Rating.create({ userId, productId, rate: newRate })

		let fullRating = await Rating.findAll({ attributes: [[Sequelize.fn('sum', Sequelize.col('rate')), 'sumrate ']], where: { productId } })

		//let product = await Product.findOne({ where: { id: productId } })
		//product.rating = allratings
		//product.save()
		return res.json({ fullRating })

	};
	async get(req, res) {
		const brand = await Brand.findAll()
		return res.json(brand)
	};

}

module.exports = new RatingController()