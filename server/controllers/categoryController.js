const { Category } = require('../models/models')
const ApiError = require('../error/apiErrors')

class CategoryController {
	async new(req, res) {
		const { cat_name } = req.body;
		const category = await Category.create({ cat_name })
		return res.json(category)
	};
	async get(req, res) {
		const categories = await Category.findAll()
		return res.json(categories)
	};

}

module.exports = new CategoryController()