const path = require('path')
const cwd = process.cwd()
const packageJson = require(path.join(cwd, 'package.json'))
const nodeExternals = require('webpack-node-externals')

function configure(config) {
  return {
    ...config,
    entry: [path.join(cwd, 'src', 'module')],
    mode: 'production',
    output: {
      path: path.join(cwd, 'dist', 'umd'),
      filename: 'umd.js',
      library: packageJson.name,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: [nodeExternals()]
  }
}

module.exports = configure
