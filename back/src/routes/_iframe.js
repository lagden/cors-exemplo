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

router
	.get('/liberado', liberado)
	.get('/bloqueado', helmet(), bloqueado)

module.exports = router
