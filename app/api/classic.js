const Router = require('koa-router')
const router = new Router()
const { PositiveValidator } = require('../validators')

router.get('/hello/:id', (ctx, next) => {
  const v = new PositiveValidator().validate(ctx)
  b
  const id = v.get('path.id')
	ctx.body = 'hello world422'
})

router.post('/hello/:id/classic/latest', (ctx, next) => {
	const { path, query, headers, body } = ctx.request
  const { params } = ctx
  const v = new PositiveValidator().validate(ctx)
  const id = v.get('body.a.b.c.d')

	ctx.body = {
		id
	}
})

module.exports = router
