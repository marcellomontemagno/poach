const htmlWebpackPlugin = require('./htmlPlugin/htmlWebpackPlugin')

function configure(config) {
  return {
    ...config,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      ...config.devServer,
      hot: true,
      historyApiFallback: true
    },
    plugins: [
      ...config.plugins,
      htmlWebpackPlugin
    ],
  }
}

module.exports = configure
