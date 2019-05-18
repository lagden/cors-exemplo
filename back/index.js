'use strict'

const app = require('./src')
const debug = require('./src/lib/debug')

const {PORT = 3000} = process.env

app.listen(PORT, () => {
	debug.log(`Server listening on port ${PORT}`)
})
