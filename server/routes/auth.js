const bcrypt = require('bcrypt')
const joi = require('joi')
const router = require('express').Router()
const {User} = require('../models/user')

function validate(req) {
	const schema = joi.object({
		email: joi.string().min(5).max(255).email().required(),
		password: joi.string().min(5).max(1024),
	})
	return schema.validate(req)
}

router.post('/', async (req, res) => {
	// body validator
	const {value, error} = validate(req.body)
	if (error) return res.send(error.details[0].message)

	// check user
	const user = await User.findOne({email: value.email})
	if (!user) return res.status(400).send('Invalid email or password.')

	// password validator
	const isValidatePassword = await bcrypt.compare(value.password, user.password)
	if (!isValidatePassword)
		return res.status(400).send('Invalid email or password.')

	const token = user.generateAuthToken()
	res.header('x-auth-token', token).send(token)
})

module.exports = router
