const path = require('path')
const cwd = process.cwd()
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

function configure(config) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        '.ts',
        '.tsx'
      ]
    },
    module: {
      ...config.module,
      rules: [
        {
          oneOf: [
            {
              test: /\.(ts|tsx)$/,
              include: [path.join(cwd, 'src')],
              use: [
                {
                  loader: 'babel-loader'
                },
                {
                  loader: 'eslint-loader'
                }
              ]
            },
            ...config.module.rules[0].oneOf
          ]
        }
      ]
    },
    plugins: [
      ...config.plugins,
      new ForkTsCheckerWebpackPlugin({
        memoryLimit: 4096
      })
    ]
  }
}

module.exports = configure
