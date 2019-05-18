'use strict'

const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const debug = require('../lib/debug')

const router = new Router()

function endpoint(ctx) {
	const {body} = ctx.request
	ctx.body = {echo: body}
}

router
	.post('/endpoint', bodyparser(), endpoint)

module.exports = router
