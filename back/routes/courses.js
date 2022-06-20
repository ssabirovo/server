const router = require('express').Router()
const mongoose = require('mongoose')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const {Course, validate} = require('../models/course')

router.get('/', async (req, res) => {
	const courses = await Course.find().sort('price').select('-__v')
	res.send(courses)
})

router.get('/:id', async (req, res) => {
	const course = await Course.findById(req.params.id).select('-__v')
	if (!course) return res.status(404).send('Product not fount')
	res.send(course)
})
// create course
router.post('/', auth, async (req, res) => {
	let {value, error} = validate(req.body)
	console.log('error = ', error)
	if (error) return res.send(error.details[0].message)
	value = {...value, createdBy: req.user.name}
	let course = new Course(value)
	course = await course.save()
	res.send(course)
})

router.put('/:id', auth, async (req, res) => {
	const {value, error} = validate(req.body)
	if (error) return res.send(error.details[0].message)

	const course = await Course.findByIdAndUpdate({_id: req.params.id}, value, {
		new: true,
	}).select('-__v')

	if (!course) return res.send('Product not fount').status(404)
	res.send(course)
})

router.delete('/:id', [auth], async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id))
		return res.status(404).send('Invalid course id...😎')
	const course = await Course.findById(req.params.id)

	if (course.createdBy !== req.user.name)
		return res.status(404).send('Invalid course id...😎')
	course.remove()
	if (!course) return res.status(404).send('Product not fount')
	res.send(course)
})

module.exports = router
