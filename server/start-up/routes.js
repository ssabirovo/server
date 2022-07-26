const {json} = require('express')
const courses = require('../routes/courses')
const customers = require('../routes/customers')
const auth = require('../routes/auth')
const users = require('../routes/users')
const error = require('../middleware/error')

module.exports = function (app) {
	app.use(json())
	app.use('/api/courses', courses)
	app.use('/api/customers', customers)
	app.use('/api/users', users)
	app.use('/api/auth', auth)
	app.use(error)
}



// http://kun.uz/api/courses -> GET
// http://kun.uz/api/customers -> GET
// http://kun.uz/api/users -> GET
// http://kun.uz/api/auth -> GET