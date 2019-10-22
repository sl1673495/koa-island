class HttpException extends Error {
  constructor(message = '服务器异常', code = 10000, status = 400) {
    super(message)
    this.code = code
    this.status = status
  }
}

class ParameterException extends HttpException {
  constructor(message = '参数错误', code = 10000) {
    super(message, code, 400)
  }
}

module.exports = {
  HttpException,
  ParameterException
}