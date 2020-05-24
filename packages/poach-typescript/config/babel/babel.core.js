function configure(config) {
  return {
    ...config,
    presets: [
      ...config.presets,
      '@babel/preset-typescript'
    ]
  }
}

module.exports = configure
