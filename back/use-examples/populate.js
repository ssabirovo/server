const mongoose = require('mongoose')

mongoose
	.connect('mongodb://localhost/populate')
	.then(() => console.log('Connected to MongoDB...'))
	.catch(() => console.log('Could not connect to MongoDB...'))

const Author = mongoose.model(
	'Author',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			minLength: 4,
			maxlength: 50,
		},
		phone: {
			type: String,
			required: true,
			minLength: 4,
			maxlength: 50,
		},
	}),
)

const Category = mongoose.model(
	'Category',
	new mongoose.Schema(
		{
			name: {
				type: String,
				required: true,
				minLength: 4,
				maxlength: 50,
			},
			status: {
				type: String,
				enum: ['silver', 'gold', 'premium'],
				lowercase: true,
				trim: true,
				set: (v) => v.toLowerCase(),
				get: (v) => v.toLowerCase(),
			},
		},
		{
			toObject: {getters: true, setters: true},
			toJSON: {getters: true, setters: true},
		},
	),
)

const Course = mongoose.model(
	'Course',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			minLength: 4,
			maxlength: 50,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Author',
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
	}),
)

async function createAuthor(name, phone) {
	let author = new Author({name, phone})
	author = await author.save()
	console.log('Created author = ', author)
}
async function createCategory(name, status) {
	let category = new Category({name, status})
	category = await category.save()
	console.log('Created author = ', category)
}

async function createCourse(name, author, category) {
	let course = new Course({name: `${name} Course`, author, category})
	course = await course.save()
	console.log('Created course = ', course)
}

const getCourseList = async () => {
	const courses = await Course.find()
		.populate('author', 'name phone -_id')
		.populate('category', 'name status -_id')
		.select('name author category')
	console.log('courses = ', courses)
}

const getCategories = async () => {
	const categories = await Category.find()
	console.log('categories = ', categories)
}

getCourseList()
// createCategory('MoisReverse: truebile', 'SILVER')
// createCategory('Flutter development', 'GOLd')
// createCategory('React-Native development', 'Gold')

// createCourse('Node js', '6170db1360ec87aa42679768', '6170dd352cabadfccea7a40b')
// createCourse('React js', '6170db1360ec87aa42679769', '6170dd352cabadfccea7a40c')
// createCourse('Python', '6170db1360ec87aa4267976a', '6170dd352cabadfccea7a40d')
