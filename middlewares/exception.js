const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (global.config.env === 'dev') {
      throw error
    }
    if (error instanceof HttpException) {
      ctx.body = {
        message: error.message,
        code: error.code,
        requestUrl: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = error.status
    } else {
      // 未知异常
      ctx.body = {
        message: `服务器未知问题， ${error.message}`,
        code: 999,
        requestUrl: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError
