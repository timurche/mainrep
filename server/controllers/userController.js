const ApiError = require('../error/apiErrors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart } = require('../models/models')

const generateJWT = (id, email, role) => {
	return jwt.sign(
		{ id, email, role },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' })
}


class UserController {
	async registration(req, res, next) {
		const { email, pass, role } = req.body;

		if (!email || !pass) {
			return next(ApiError.badRequest('Something wrong with email or password!'))
		}

		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(ApiError.badRequest('User alredy registered!'))
		}

		const hashPass = await bcrypt.hash(pass, 5)
		const user = await User.create({ email, role, passwd: hashPass })
		const cart = await Cart.create({ userId: user.id })
		const token = generateJWT(user.id, user.email, user.role)
		return res.json({ token })
	};
	async login(req, res, next) {
		const { email, pass } = req.body

		const user = await User.findOne({ where: { email } })
		if (!user) {
			next(ApiError.internal("User not registred"))
		}

		const passCompare = bcrypt.compareSync(pass, user.passwd)
		if (!passCompare) {
			next(ApiError.internal("Login or password error"))
		}

		const token = generateJWT(user.id, user.email, user.role)

		return res.json({ token })
	};

	async auth(req, res, next) {
		const token = generateJWT(req.user.id, req.user.email, req.user.role)
		return res.json({ token })
	};
}

module.exports = new UserController()