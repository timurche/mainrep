const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/apiErrors')
const { count } = require('console')

class ProductController {
	async newProd(req, res, next) {
		try {
			let { name, price, categoryId, brandId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName,))

			const product = await Product.create({ name, price, categoryId, brandId, img: fileName })

			if (info) {
				info = JSON.parse(info)
				console.log(typeof info)
				info.forEach(element =>
					ProductInfo.create({
						title: element.title,
						description: element.description,
						productId: product.id
					})

				);
			}

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	};
	async getProds(req, res) {
		let { brandId, categoryId, limit, page } = req.query;
		limit = limit || 9
		page = page || 1
		let offset = page * limit - limit

		let products;

		if (!brandId && !categoryId) {
			products = await Product.findAll({ limit, offset })
		}

		if (brandId && !categoryId) {
			products = await Product.findAll({ where: { brandId }, limit, offset })
		}

		if (!brandId && categoryId) {
			products = await Product.findAll({ where: { categoryId }, limit, offset })
		}

		if (brandId && categoryId) {
			products = await Product.findAll({ where: { categoryId, brandId }, limit, offset })
		}
		//products.push({ 'pages': page + ' from ' + Math.ceil(await Product.count() / limit) })
		return res.json(products)

	};
	async getProd(req, res) {
		const id = req.params.id
		const product = await Product.findOne(
			{
				where: { id },
				include: { model: ProductInfo, as: 'info' }
			}
		)
		return res.json(product)
	};
}

module.exports = new ProductController()