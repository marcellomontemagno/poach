function configure(config) {
  return {
    ...config,
    presets: [
      ...config.presets,
      '@babel/preset-react'
    ]
  }
}

module.exports = configure
