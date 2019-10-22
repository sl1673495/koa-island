const Router = require('koa-router')
const router = new Router()

router.get('/v1/book', (ctx, next) => {
  ctx.body = 'hello book'
})

module.exports = router
