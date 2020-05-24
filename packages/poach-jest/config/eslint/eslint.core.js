function configure(config) {
  return {
    ...config,
    env: {
      jest: true
    }
  }
}

module.exports = configure
