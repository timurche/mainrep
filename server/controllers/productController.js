const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../error/apiErrors')

class ProductController {
	async newProd(req, res, next) {
		try {
			const { name, price, categoryId, brandId } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName,))

			const product = await Product.create({ name, price, categoryId, brandId, img: fileName })

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	};
	async getProds(req, res) {

	};
	async getProd(req, res) {

	};
}

module.exports = new ProductController()