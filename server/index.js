require('dotenv').config()

const express = require('express')
const sequelize = require('./db_connect')
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`lets fucking together on port: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

start()