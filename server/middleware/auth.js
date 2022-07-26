const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function auth(req, res, next) {
	const token = req.header('x-token')
	if (!token) return res.status(401).send('Access denied. No token provided.')

	try {
		const decoded = jwt.verify(token, config.get('jwt_key'))
		req.user = decoded
		console.log('req.user = ', req.user)
		next()
	} catch (err) {
		res.status(400).send('Invalid token.')
	}
}
