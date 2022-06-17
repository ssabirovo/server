const winston = require('winston')
require('express-async-errors')
require('winston-mongodb')

module.exports = function () {
	process.on('unhandledRejection', (err) => {
		throw err
	})
	winston.add(
		new winston.transports.File({filename: 'error.log', level: 'error'}),
	)
	winston.add(new winston.transports.Console({level: 'info'}))
	winston.add(
		new winston.transports.File({
			filename: 'exceptions.log',
			handleExceptions: true,
			level: 'error',
		}),
	)
	winston.exceptions.handle()
}
