const { Brand } = require('../models/models')
const ApiError = require('../error/apiErrors')

class BrandController {

	async new(req, res) {
		const { brand_name } = req.body;
		const brand = await Brand.create({ brand_name })
		return res.json(brand)
	};
	async get(req, res) {
		const brand = await Brand.findAll()
		return res.json(brand)
	};

}

module.exports = new BrandController()