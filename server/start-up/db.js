const {connect} = require('mongoose')
const {info} = require('winston')
const dbURL = require('config').get('dbURL')

module.exports = function () {
	connect(dbURL).then(() => info('Connected to MongoDB...'))
}
