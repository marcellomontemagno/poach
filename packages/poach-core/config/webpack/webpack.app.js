const cwd = process.cwd()
const path = require('path')
const htmlWebpackPlugin = require('./htmlPlugin/htmlWebpackPlugin')

function configure(config) {
  return {
    ...config,
    mode: 'production',
    plugins: [
      ...config.plugins,
      htmlWebpackPlugin
    ],
    output: {
      path: path.join(cwd, 'dist', 'app'),
      filename: 'app.js'
    }
  }
}

module.exports = configure
