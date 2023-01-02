const ApiError = require('../error/apiErrors')

class UserController {
	async registration(req, res) {

	};
	async login(req, res) {

	};
	async auth(req, res, next) {
		const { id } = req.query
		if (!id) {
			return next(ApiError.badRequest("не вижу ID"))
		}
		id ? res.json(id) : ApiError.badRequest()
	};
}

module.exports = new UserController()