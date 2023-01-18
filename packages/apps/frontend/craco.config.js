const path = require('path')
const fs = require('fs')
const { getLoader, loaderByName } = require('@craco/craco')
const absolutePath = path.join(__dirname, '../../common/ui')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  webpack: {
    alias: {
      '~': resolveApp('src')
    },
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      )

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include]
        match.loader.include = include.concat[absolutePath]
      }
      return webpackConfig
    }
  }
}
