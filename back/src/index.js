'use strict'

const Koa = require('koa')
const cors = require('@koa/cors')
const debug = require('./lib/debug')
const errorHandling = require('./lib/error')
const routes = require('./routes')

const optionsCORS = {}

const app = new Koa()
app
	.use(errorHandling)
	.use(cors(optionsCORS))
	.use(routes)
	.on('error', debug.error)

app.proxy = true

module.exports = app
