const bcrypt = require('bcrypt')
const _ = require('lodash')
const router = require('express').Router()
const {User, validate} = require('../models/user')
const auth = require('../middleware/auth')

router.get('/me', auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password -__v')
	res.send(user)
})

router.post('/', async (req, res) => {
	console.log('req.body = ', req.body)
	const {value, error} = validate(req.body)
	if (error) return res.send(error.details[0].message)

	let user = await User.findOne({email: value.email})
	if (user) return res.status(400).send('User already registered.')

	const salt = await bcrypt.genSalt(10)
	value.password = await bcrypt.hash(value.password, salt)

	user = new User(value)
	user.save()

	res.send(_.pick(user, ['name', 'email']))
})

module.exports = router
