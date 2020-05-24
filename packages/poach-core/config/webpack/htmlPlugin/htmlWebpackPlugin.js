const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = new HtmlWebpackPlugin({
  template: path.join(process.cwd(), 'src', 'index.html'),
  hash: true
})
