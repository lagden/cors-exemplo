'use strict'

async function errorHandling(ctx, next) {
	try {
		await next()
	} catch (error) {
		ctx.status = (error && error.status) || ctx.status || 500
		ctx.body = {
			error: {
				status: ctx.status,
				message: error.message || 'Falha no servidor'
			}
		}
		ctx.app.emit('error', error)
	}
}

module.exports = errorHandling
