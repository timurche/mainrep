require('dotenv').config()

const express = require('express')
const sequelize = require('./db_connect')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const app = express()
const router = require('./routes/index')

app.use(express.json())

app.use('/api/v1', router)

const start = async () => {
	try {
		sequelize.authenticate()
		sequelize.sync()
		app.listen(PORT, () => console.log(`lets working together on port: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

start()