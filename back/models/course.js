const joi = require('joi')
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minlength: 4,
		maxlength: 50,
	},
	price: {
		type: Number,
		required: true,
		min: 400,
		max: 5000,
	},
	createdBy: {
		type: String,
		trim: true,
		required: true,
		minlength: 4,
		maxlength: 50,
	},
})

const Course = mongoose.model('Course', courseSchema)

function validateCourse(course) {
	const schema = joi.object({
		name: joi.string().min(4).required(),
		price: joi.number().min(300).max(4000).required(),
	})
	return schema.validate(course)
}

exports.Course = Course
exports.validate = validateCourse
