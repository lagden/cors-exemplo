'use strict'

const Router = require('koa-router')
const helmet = require('koa-helmet')
const debug = require('../lib/debug')

const router = new Router()

function liberado(ctx) {
	ctx.body = '<h1>Liberado</h1>'
}

function bloqueado(ctx) {
	ctx.body = '<h1>Bloqueado</h1>'
}

console.log(helmet.contentSecurityPolicy.toString())

router
	.get('/liberado', helmet.contentSecurityPolicy({
		directives: {
			'child-src': ['*']
		}
	}), liberado)
	.get('/bloqueado', helmet.contentSecurityPolicy({
		directives: {
			'frame-ancestors': ["'none'"]
		}
	}), bloqueado)

module.exports = router
