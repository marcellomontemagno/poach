const path = require('path')
const cwd = process.cwd()

function configure(config) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        '.jsx'
      ]
    },
    module: {
      ...config.module,
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|jsx)$/,
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
    }
  }
}

module.exports = configure
