const winston = require('winston')

module.exports = function (err, req, res, next) {
	winston.error(err.message, err)
	// logging exception
	res.status(500).send('Something failed.')
}
