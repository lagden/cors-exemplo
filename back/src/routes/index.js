'use strict'

const {readdirSync} = require('fs')
const {join} = require('path')
const compose = require('koa-compose')

const pattern = /^_[\w-_]+\.js/
const files = readdirSync(__dirname).filter(f => pattern.test(f)).map(f => join(__dirname, f))
const middleware = []

for (const file of files) {
	const router = require(file)
	middleware.push(router.routes())
	middleware.push(router.allowedMethods({throw: true}))
}

module.exports = compose(middleware)
