const router = require('express').Router()
const {Customer, validate} = require('../models/customer')

router.get('/', async (req, res) => {
	const customers = await Customer.find().sort('name').select('-__v')
	res.send(customers)
})

router.get('/:id', async (req, res) => {
	const customer = await Customer.findById(req.params.id).select('-__v')
	if (!customer) return res.status(404).send('Customer not fount ')
	res.send(customer)
})

router.post('/', (req, res) => {
	const {value, error} = validate(req.body)
	if (error) return res.send(error.details[0].message)

	const customer = new Customer(value)
	customer.save()
	res.send(customer)
})

router.put('/:id', async (req, res) => {
	const {value, error} = validate(req.body)
	if (error) return res.send(error.details[0].message)
	console.log('value =', value)

	const customer = await Customer.findByIdAndUpdate(
		{_id: req.params.id},
		value,
		{
			new: true,
		},
	).select('-__v')

	if (!customer) return res.send('Customer not fount').status(404)
	res.send(customer)
})

router.delete('/:id', async (req, res) => {
	const customer = await Customer.findByIdAndDelete(req.params.id)
	if (!customer) return res.status(404).send('Customer not fount')
	res.send(customer)
})

module.exports = router
