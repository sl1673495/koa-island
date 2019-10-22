const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.loadConfig()
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule,
    })

    function whenLoadModule(mod) {
      if (mod instanceof Router) {
        InitManager.app.use(mod.routes())
      }
    }
  }

  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager
