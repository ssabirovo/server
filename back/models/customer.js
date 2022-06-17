const joi = require('joi')
const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minlength: 4,
		maxlength: 50,
	},
	isGold: {
		type: Boolean,
		default: false,
	},
	phone: {
		type: String,
		trim: true,
		required: true,
		minlength: 4,
		maxlength: 50,
	},
})

const Customer = mongoose.model('Customer', customerSchema)

function validateCustomer(customer) {
	const schema = joi.object({
		name: joi.string().min(4).required(),
		isGold: joi.boolean(),
		phone: joi.string().min(4).max(50).required(),
	})
	return schema.validate(customer)
}

exports.Customer = Customer
exports.validate = validateCustomer
