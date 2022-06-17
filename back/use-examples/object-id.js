const mongoose = require('mongoose')

const id = new mongoose.Types.ObjectId()
console.log('id = ', id)
console.log('timestamp = ', id.getTimestamp())
console.log('generation time = ', id.generationTime)
