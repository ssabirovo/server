const {info} = require('winston')
const app = require('express')()
const port = require('config').get('port')

require('./start-up/logging')()
require('./start-up/validation')
require('./start-up/routes')(app)
require('./start-up/db')()
require('./start-up/prod')(app)

app.listen(port, () => info(`Listening on port ${port}...`))
